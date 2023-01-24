const addNumber = (e, displayNumber, newNumber, setNewNumber, setDisplayNumber) => {

    console.log('e:', e)
    console.log('displayNumber:', displayNumber)
    console.log('setDisplayNumber:', setDisplayNumber)

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