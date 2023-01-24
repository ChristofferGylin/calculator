import calculateResult from "./calculateResult";

const addOperator = (e, newNumber, displayNumber, memoryNumber, operator, setOperator, setNewNumber, setMemoryNumber, setDisplayNumber) => {

    setNewNumber(true);
    setOperator(e.target.innerHTML);
    setMemoryNumber(parseFloat(displayNumber));

    if (memoryNumber !== 0 && !newNumber) {


        calculateResult(operator, displayNumber, memoryNumber, setDisplayNumber, setMemoryNumber)

    }

}

export default addOperator;