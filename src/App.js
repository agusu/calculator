import './App.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {inputDigit, inputOperator, inputDecimal, inputEqual, clear} from './calculator'

function App() {
  const display = useSelector((state) => state.calculator.display)
  const operation = useSelector((state) => state.calculator.operation)
  const dispatch = useDispatch();
  
  const handleOperator = (e) =>{
    dispatch(inputOperator(e.target.value));
  }
  
  const handleNumber = (e) => {
    dispatch(inputDigit(e.target.value));
  }

  return (
    <div id="wrapper" className="">

        <div id="calc" className="container px-4 py-2">
        <div id="operation">{operation}</div>
        <div id="display">{display}</div>
        <div className="row mb-1">
          <button id="clear" onClick={() => {dispatch(clear())}} className="wide btn btn-dark col mx-1" value="CE">CE</button>
          <button id="divide" onClick={handleOperator} value="/" className="btn btn-light col-3 ">/</button>
          </div>
          <div className="row">
          <button id="seven" onClick={handleNumber} value="7" className="btn btn-secondary col mx-1">7</button>
          <button id="eight" onClick={handleNumber} value="8" className="btn btn-secondary col ">8</button>
          <button id="nine" onClick={handleNumber} value="9" className="btn btn-secondary col mx-1">9</button>
          <button id="multiply" onClick={handleOperator} value="*" className="btn btn-light col">*</button>
          </div>
          <div className="row my-1">
          <button id="four" onClick={handleNumber} value="4" className="btn btn-secondary col mx-1">4</button>
          <button id="five" onClick={handleNumber} value="5" className="btn btn-secondary col">5</button>
          <button id="six" onClick={handleNumber} value="6" className="btn btn-secondary col mx-1">6</button>
          <button id="subtract" onClick={handleOperator} value="-" className="btn btn-light col">-</button>
          </div>
          <div className="row">
          <button id="one" onClick={handleNumber} value="1" className="btn btn-secondary col mx-1">1</button>
          <button id="two" onClick={handleNumber} value="2" className="btn btn-secondary col">2</button>
          <button id="three" onClick={handleNumber} value="3" className="btn btn-secondary col mx-1">3</button>
          <button id="add" onClick={handleOperator} value="+" className="btn btn-light col">+</button>
          </div>
          <div className="row my-1">
          <button id="zero" onClick={handleNumber} value="0" className="btn btn-secondary col mx-1 ">0</button>
          <button id="decimal" onClick={() => {dispatch(inputDecimal())}} value="." className="btn btn-light col-3">.</button>
          <button id="equals" onClick={() => {dispatch(inputEqual())}} value="=" className="btn btn-dark col">=</button>
          </div>
    </div></div>
  );
}

export default App;
