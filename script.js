const namesArray = [] //creates an array where names can added. This is the array where the names added will be stored

function addName() { //a function that adds  names to the array,namesArray
    const nameInput = document.getElementById('nameInput') //storing name input element as a var to get the value of the element
    const name = nameInput.value.trim() //get the TRIMMED value of the input box and store in a var which will give the name so it can be added

    namesArray.push(name)//add the name to the end of the array so it can be added to the list
    displayNames() // Call the displayNames function to update the list

    nameInput.value = '' // Clear the input field after adding the name


}


function displayNames() { //function that displays the names added in the namesArray
    const nameList = document.getElementById('nameList') //storing name list element as a var
    nameList.innerHTML = ''// clear out previous list items
    nameList.style.fontSize = '4rem'

    for (let i = 0; i < namesArray.length; i++) { // loop that initializes the variable, "i" to 0, and continues to iterate as long as i is less than the length of the namesArray and increments i by 1 each time. Stops the loop when i is equal to or more than the length of the namesArray
        const name = namesArray[i] //stores the value of "nameArray" array at index i to the variable "name"

        const li = document.createElement('li')// creates a new list item with the create Element. Creates a list with javascirpt. Assigns this to the variable "li"

        li.classname = 'list-group-item' //for the list item we just created, this makes the class for the item "list-group-item"
        const span = document.createElement('span')//creates a span element in javascript and assigns it a variable called span. Similar to the list items created previosuly
        span.textContent = name //this makes the text content of the span element(we just created) to name. 


        li.appendChild(span) //appends the span element and makes it the child of the list element. This takes the "name" text (from the span tag) and adds it to the list item
        nameList.appendChild(li)
    }


}
function pickRandomName (){ // creates the function pickRandomName which will pick a random name when the button is clicked
    const randomNameDiv = document.getElementById('randomName') //stores the "randomName" element as a variable called randomNameDiv which will be used to assign the variable an empty string 
    document.getElementById('randomName').classList = 'text-danger'
    randomNameDiv.style.fontSize='5rem'
    randomNameDiv.textContent = ''//takes the variable, "randomNameDiv" and makes the text content an empty string which clears previous content
    //generate and select random name from the namesarray
    const randomNumber = Math.floor(Math.random() * namesArray.length) //creates a random number to select a random name. The random number created is stored as a var. To create a random number, a random number between 0 and 1 (Math.random) is multiplied with the length of the namesArray and then is rounded down to the nearest integer. This is stored as a variable
    const randomName = namesArray[randomNumber]// this gets the name randomly generated name with the help of the variable, "randomNumber".
    randomNameDiv.textContent = randomName //This changes the text content of the randomNameDiv variable to the randomName variable (which contains a random name selected)
    namesArray.splice(randomNumber, 1)// this line removes the random name selected from the namesArray. This is done with the splice element
    displayNames()//calls the function displayNames
}

//Event Listener for the button click to add a name. Buttons only work with this
document.getElementById('addNameBtn').addEventListener('click',addName)


//Event Listener for the button click to select and display a name
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName)






