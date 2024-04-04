const namesArray = []

function addName() {
    const nameInput = document.getElementById('nameInput') //storing name input element as a var
    const name = nameInput.value.trim() //get the TRIMMED value of the input box and store in a var

    namesArray.push(name)//add the name to the end of the array
    displayNames() // Call the displayNames function to update the list

    nameInput.value = '' // Clear the input field after adding the name
    if (nameInput.value === ''){
        alert('Please add name')
        return
    }

}


function displayNames() {
    const nameList = document.getElementById('nameList')
    nameList.innerHTML = ''// clear out previous list items

    for (let i = 0; i < namesArray.length; i++) {
        const name = namesArray[i]

        const li = document.createElement('li')

        li.classname = 'list-group-item'
        const span = document.createElement('span')
        span.textContent = name


        li.appendChild(span)
        nameList.appendChild(li)
    }


}
function pickRandomName (){
    const randomNameDiv = document.getElementById('randomName')
    randomNameDiv.textContent = ''
    //generate and select random name from the namesarray
    const randomNumber = Math.floor(Math.random() * namesArray.length)
    const randomName = namesArray[randomNumber]
    randomNameDiv.textContent = randomName
    namesArray.splice(randomNumber, 1)
    displayNames()
}

//Event Listener for the button click to add a name
document.getElementById('addNameBtn').addEventListener('click',addName)


//Event Listener for the button click to select and display a name
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName)






