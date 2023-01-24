import { useState } from 'react';
import addNumber from './addNumber';
import addOperator from './addOperator';
import allCancel from './allCancel';
import calculateResult from './calculateResult';


function App() {
  const [displayNumber, setDisplayNumber] = useState('0');
  const [memoryNumber, setMemoryNumber] = useState(0);
  const [operator, setOperator] = useState(null);
  const [newNumber, setNewNumber] = useState(true);

  return (
    <div className="App">
      <div className='grid grid-cols-4 grid-row-6 gap-4 bg-slate-700 w-96 p-4 rounded-xl mt-8 mx-auto'>
        <div className='flex justify-end items-center p-3 text-4xl text-slate-700 col-span-4 w-full h-24 bg-slate-300 rounded-xl'>{displayNumber}</div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100" onClick={(e) => { addNumber(e, displayNumber, newNumber, setNewNumber, setDisplayNumber) }}>7</div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100" onClick={(e) => { addNumber(e, displayNumber, newNumber, setNewNumber, setDisplayNumber) }}>8</div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100" onClick={(e) => { addNumber(e, displayNumber, newNumber, setNewNumber, setDisplayNumber) }}>9</div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100" onClick={(e) => { addOperator(e, newNumber, displayNumber, memoryNumber, operator, setOperator, setNewNumber, setMemoryNumber, setDisplayNumber) }}>/</div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100" onClick={(e) => { addNumber(e, displayNumber, newNumber, setNewNumber, setDisplayNumber) }}>4</div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100" onClick={(e) => { addNumber(e, displayNumber, newNumber, setNewNumber, setDisplayNumber) }}>5</div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100" onClick={(e) => { addNumber(e, displayNumber, newNumber, setNewNumber, setDisplayNumber) }}>6</div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100" onClick={(e) => { addOperator(e, newNumber, displayNumber, memoryNumber, operator, setOperator, setNewNumber, setMemoryNumber, setDisplayNumber) }}>x</div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100" onClick={(e) => { addNumber(e, displayNumber, newNumber, setNewNumber, setDisplayNumber) }}>1</div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100" onClick={(e) => { addNumber(e, displayNumber, newNumber, setNewNumber, setDisplayNumber) }}>2</div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100" onClick={(e) => { addNumber(e, displayNumber, newNumber, setNewNumber, setDisplayNumber) }}>3</div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100" onClick={(e) => { addOperator(e, newNumber, displayNumber, memoryNumber, operator, setOperator, setNewNumber, setMemoryNumber, setDisplayNumber) }}>-</div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100" onClick={() => { allCancel(setDisplayNumber, setMemoryNumber, setOperator, setNewNumber) }}>AC</div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100" onClick={(e) => { addNumber(e, displayNumber, newNumber, setNewNumber, setDisplayNumber) }}>0</div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100" onClick={(e) => { addNumber(e, displayNumber, newNumber, setNewNumber, setDisplayNumber) }}>.</div>
        <div className="flex justify-center items-center w-20 h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100" onClick={(e) => { addOperator(e, newNumber, displayNumber, memoryNumber, operator, setOperator, setNewNumber, setMemoryNumber, setDisplayNumber) }}>+</div>
        <div className="flex justify-center items-center w-full h-20 rounded-full border border-slate-400 font-medium hover:border-slate-50 hover:font-bold bg-slate-500 text-slate-100 col-start-1 col-span-4" onClick={() => { calculateResult(newNumber, operator, displayNumber, memoryNumber, setDisplayNumber, setMemoryNumber, setNewNumber) }}>=</div>
      </div>

    </div>
  )
}

export default App
