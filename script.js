//Create an array to store names
const namesArray = []

function addName () {
    const nameInput = document.getElementById('nameInput') //this stores input element (not the name just element) as a variable using document.getElementById
    const name = nameInput.value.trim()//trim removes any characters in the begginning and end. Gets trimmed value of the input box and stores in the variable name
    namesArray.push(name) //in the namesArry, add to the end (what push does) the name
    displayNames()//call the displayNames function to update the list

    nameInput.value = '' //removes the name from the input box after the name  is submitted for the user
    
    //later (enhancement) write javascript code to not allow the user to submit the input box with no name
}