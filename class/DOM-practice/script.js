//  create an app that gets the square and cube of a number thats input in.

const inputNumber = document.getElementById("input-number")
const squaredResult = document.getElementById("squared-result")
const cubedResult = document.getElementById("cubed-result")
const historyContainer = document.getElementById("history-container")

const calculateResult = () => {
    // calculate results
    squaredResult.innerHTML = inputNumber.value * inputNumber.value
    cubedResult.innerHTML = inputNumber.value * inputNumber.value * inputNumber.value

    // create a p tag
    let newNumber = document.createElement("p")
    newNumber.innerHTML = inputNumber.value
    newNumber.setAttribute("id", "search")
    historyContainer.appendChild(newNumber)

    // reset input box
    inputNumber.value = ""
}

const deleteLastEntry = () => {
    historyContainer.removeChild(historyContainer.lastChild)

    // reset the results
    squaredResult.innerHTML = "?"
    cubedResult.innerHTML = "?"
}

const clearHistory = () => {
    while(historyContainer.firstChild){
        historyContainer.removeChild(historyContainer.lastChild)
    }

    // historyContainer.innerHTML = ""

    // reset the results
    squaredResult.innerHTML = "?"
    cubedResult.innerHTML = "?"
}