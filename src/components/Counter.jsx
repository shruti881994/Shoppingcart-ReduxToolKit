import { useDispatch, useSelector } from "react-redux";
import { increment, incrementBy10, decrement, decrementBy10, incrementByValue, incrementByInputValue  } from "../app/counterSlice";
const Counter = ()=>{
    const counter = useSelector(state => state.count);
    const dispatch = useDispatch();
    
    return(
        <>
        <h1>Counter value= {counter}</h1>
        <button onClick={()=>{dispatch(increment())}}>increment</button>
        <button onClick={()=>{dispatch(incrementBy10())}}>incrementBy10</button>
        <button onClick={()=>{dispatch(decrement())}}>decrement</button>
        <button onClick={()=>{dispatch(decrementBy10())}}>decrementBy10</button>
        <button onClick={()=>{dispatch(incrementByValue(20))}}>Increase by Value</button>
        <input type="number" onChange={(e)=>{dispatch(incrementByInputValue(Number(e.target.value)))}}/>

        </>
    )
}

export default Counter;