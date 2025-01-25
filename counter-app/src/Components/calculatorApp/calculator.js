import React,{useState} from 'react'
import './calculator.css';

const Calculator = () => {
  const[input,setInput] = useState("");
  const[result,setResult]=useState("");


  const calculateResult=()=>{
    setResult(eval(input));
  };
  const handleInput =(value)=>{
    setInput((prev)=> prev+value);
  };
  const clearInput=()=>{
    setInput("");
    setResult("");
  };
  return (
    <div className='calculator'>
      <div className='display'>
        <div className='input'>{input}</div>
        <div className='result'>{result}</div>
      </div>
      <div className='buttons'>
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "+", "="].map((btn) => (
            <button
              key={btn}
              className="button"
              onClick={() => (btn === "=" ? calculateResult() : handleInput(btn))}>
              {btn}
              </button>
        ))}
        <button className='button' onClick={clearInput}>C</button>
      </div>
    </div>
  );
};
export default Calculator;