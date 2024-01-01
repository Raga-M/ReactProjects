import { useDispatch, useSelector } from "react-redux";
import { increase,decrease,addBy,reset } from "./app/CounterSlice";
import "./App.css";
import { useState } from "react";
import Count from "./Count";
function App() {
  const [data,setData]=useState("")
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const add = () => {
    dispatch(increase());
  };
  const sub = () => {
    dispatch(decrease());
  };
const addIt=(data)=>{
dispatch(addBy(data))
setData("")
}
const Refresh=()=>{
  setData("")
  dispatch(reset());
 
}
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={sub}>-</button>

      <button onClick={add}>+</button>
  <br />
<br />
        <input type="text" value={data} onChange={(e)=>{setData(Number(e.target.value)||0)}} />
   
        <button onClick={()=>addIt(data)}>AddAmount</button>
        <br />
        <br />
        <button onClick={Refresh}>Reset</button>
      <Count/>
    </div>
  );
}

export default App;
