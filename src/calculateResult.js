const calculateResult = (newNumber, operator, displayNumber, memoryNumber, setDisplayNumber, setMemoryNumber, setNewNumber) => {

    if (newNumber) {

        return;

    }

    let result;
    const number = parseFloat(displayNumber);

    console.log(operator)

    switch (operator) {

        case '+':
            result = memoryNumber + number;
            break;

        case '-':
            result = memoryNumber - number;
            break;

        case 'x':
            result = memoryNumber * number;
            break;

        case '/':
            result = memoryNumber / number;
            break;
    }

    setDisplayNumber(result.toString())
    setMemoryNumber(result.toString())
    setNewNumber(true);

}

export default calculateResult;