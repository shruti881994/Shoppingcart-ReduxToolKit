import { useSelector, useDispatch } from "react-redux";
import './Product.css';
import { addToCart } from "../app/cartSlice";
import { removeFromCart } from "../app/cartSlice";
import { clearCart } from "../app/cartSlice";
// useSelector is a hook that allows you to extract data from the Redux store state, and useDispatch is a hook that gives you access to the dispatch function to send actions to the Redux store.


const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);
    const cart = useSelector(state => state.cart.cart);

    // logic for total price of products in cart
    const totalPrice = cart.reduce((itemprice, item) => itemprice + item.price, 0);
    console.log("Added to cart", cart)
    return (
        <>
            <div className="cart-container">
                <h1 className="cart-title">🛒 Shopping Cart</h1>
                {/* product section */}
                <div className="product-section">
                    <h2 className="section-title"> 🛍️ Products</h2>
                    <div className="products-list">
                        {
                            products.map((product) =>
                                <div key={product.id} className="product-card">
                                    <div className="product-info">
                                        <span className="product-name">
                                            {product.name}
                                        </span>
                                        <span className="product-price">
                                            {product.price}
                                        </span>
                                    </div>
                                    <button className="add-btn btn"
                                     onClick={() => dispatch(addToCart(product))}>
                                        Add to Cart</button>

                                </div>)
                        }

                    </div>
                </div>
                <hr className="divider"></hr>
                {/* cart section */}
                <div className="cart-section">
                    <h2 className="section-title"> 🛒 Your Cart</h2>
                    {
                        cart.length === 0 ? <p className="empty-cart">Your Cart is Empty</p> : 

                        (
                        <>
                        <div className="cart-items">
                            {cart.map((item)=><div key={item.id} className="cart-item">
                               <span className="item-name">{item.name}</span> 
                               <span className="item-price">{item.price.toFixed(2)}</span> 
                               <button className="remove-btn btn" 
                               onClick={() => dispatch(removeFromCart(item))}>
                                Remove
                                </button>
                            </div>)}
                            </div>
                        </>
                        )
                    }
                    </div>
                    <hr className="divider"></hr>
                    {/* total section */}
                    <div className="cart-summary">
                        <p><strong>Total Items: {cart.length}</strong></p>
                        <p><strong>Total Price: {totalPrice}</strong></p>
                        <button className="btn clear-btn" onClick={()=> {dispatch(clearCart())}}>Clear</button>

                    </div>
            </div>
        </>
    )
}

export default Products;