const addNumber = (e, displayNumber, newNumber, setNewNumber, setDisplayNumber) => {

    console.log(e.target.innerHTML)
    if (newNumber) {

        if (e.target.innerHTML !== '0') {

            setNewNumber(false);
            setDisplayNumber(e.target.innerHTML)

        }

    } else {

        if (displayNumber.length < 17) {

            setDisplayNumber(displayNumber + e.target.innerHTML)

        }
    }
}

export default addNumber;