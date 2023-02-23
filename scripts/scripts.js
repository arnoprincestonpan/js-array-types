/*
 *  Name:   Arno Princeston Pan
 *  Project:    JavaScript Arrays
 *  Purpose:    To use JavaScript to see what type of array was chosen.
 *  Note:   Originally a more simplier assignment, redone with options to make it more dynamic.
 *          ...also to give a test driven approach as practice.
 */

const optionSelected = document.getElementById("array-examples")
const checkArray = document.getElementById("check-array")
const displayArea = document.getElementById("display")

// initialize arrays
let imageArray = new Array()
let arrayStrings = ["Peter", "Stewie", "Brian", "Chris", "Quagmire"]
let arrayNumbers = [1, 2, 3, 4, 5, 6]
let arrayEmpty = []

// initialize none arrays
let someNumber = 0
let someString = ""

// setup image width and height
let imageWidth = 247
let imageHeight = 359

// import images
let imagePeter = new Image(imageWidth, imageHeight)
let imageStewie = new Image(imageWidth, imageHeight)
let imageBrian = new Image(imageWidth, imageHeight)
let imageChris = new Image(imageWidth, imageHeight)
let imageQuagmire = new Image(imageWidth, imageHeight)

imagePeter.src = "https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png?20110515154115"
imageStewie.src = "https://upload.wikimedia.org/wikipedia/en/0/02/Stewie_Griffin.png"
imageBrian.src = "https://upload.wikimedia.org/wikipedia/en/1/12/Brian_Griffin.png?20131212131323"
imageChris.src = "https://upload.wikimedia.org/wikipedia/en/d/df/Chris_Griffin.png?20110630224907"
imageQuagmire.src = "https://upload.wikimedia.org/wikipedia/en/f/fe/Glenn_Quagmire.png"

// add to Array
imageArray.push(imagePeter)
imageArray.push(imageStewie)
imageArray.push(imageBrian)
imageArray.push(imageChris)
imageArray.push(imageQuagmire)

optionSelected.addEventListener("change", function () {
    displayArea.innerHTML = ""
    console.log(optionSelected.value)
    if (optionSelected.value === 'image-array') {
        console.log("image array: " + (optionSelected.value === 'image-array'))
        // append to displayArea
        imageArray.forEach(image => {
            displayArea.appendChild(image)
        })
    } else if (optionSelected.value === 'string-array') {
        console.log("string array: " + (optionSelected.value === 'string-array'))
        displayArea.innerHTML += "<ul>"
        arrayStrings.forEach(string => {
            displayArea.innerHTML += "<li>" + string + "</li>"
        })
        displayArea.innerHTML += "</ul>"
    } else if (optionSelected.value === 'number-array') {
        console.log("number array: " + (optionSelected.value === 'number-array'))
        displayArea.innerHTML += "<ul>"
        arrayNumbers.forEach(number => {
            displayArea.innerHTML += "<li>" + number + "</li>"
        })
        displayArea.innerHTML += "</ul>"
    } else if (optionSelected.value === 'empty-array') {
        console.log("empty array: " + (optionSelected.value === 'empty-array'))
        displayArea.innerHTML += "<ul>" + arrayEmpty + "<ul>"
    } else if (optionSelected.value === 'string') {
        console.log("string: " + (optionSelected.value === 'string'))
        fetch("https://random-word-api.herokuapp.com/word")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP ERROR: ${response.status}`)
                }
                return (response.text())
            })
            .then((text) => {
                someNumber = JSON.parse(text)[0]
                displayArea.innerHTML += `<p>${someNumber}</p>`
            })
            .catch((error) => console.log($(error)))
    } else if (optionSelected.value === 'number') {
        console.log("number: " + (optionSelected.value === 'number'))
        someNumber = Math.floor(Math.random() * 100)
        displayArea.innerHTML += `<p>${someNumber}</p>`
    } else {
        console.log("How did you get here?")
    }
})

checkArray.addEventListener("click", function () {
    console.log("Checking Arrays...")
    let itemChecked = retrieveSelected()

    console.log("Array? " + Array.isArray(itemChecked))
    console.log("Empty Array? " + itemChecked.length == 0)

    if (Array.isArray(itemChecked)) {
        displayArea.innerHTML += `<p>The selection is an Array.</p>`
        if (itemChecked == 0) {
            displayArea.innerHTML += `<p>The selection is empty inside.</p>`
        } else {
            displayArea.innerHTML += `<p>The selection is filled.</p>`
            // these mentioned will ensure that the type check mentions only once.
            let mentionedString = 0
            let mentionedNumber = 0
            let mentionedObject = 0
            itemChecked.forEach(element => {
                if (typeof (element) == "string") {
                    if (!mentionedString) {
                        displayArea.innerHTML += `<p>The selection has some String inside.</p>`
                        mentionedString++
                    }
                } else if (typeof (element) == "number") {
                    if (!mentionedNumber) {
                        displayArea.innerHTML += `<p>The selection has some Number inside.</p>`
                        mentionedNumber++
                    }
                } else if (typeof (element) == 'object') {
                    if (!mentionedObject) {
                        displayArea.innerHTML += `<p>The selection has some Object inside.</p>`
                        mentionedObject++
                    }
                }
            })
        }
    } else {
        displayArea.innerHTML += `<p>The selection is not an Array.</p>`
    }
})

function retrieveSelected() {
    console.log(optionSelected.value)
    if (optionSelected.value === 'image-array') {
        return imageArray
    } else if (optionSelected.value === 'string-array') {
        return arrayStrings
    } else if (optionSelected.value === 'number-array') {
        return arrayNumbers
    } else if (optionSelected.value === 'empty-array') {
        return arrayEmpty
    } else if (optionSelected.value === 'string') {
        return someString
    } else if (optionSelected.value === 'number') {
        return someNumber
    } else {
        console.log("How did you get here?")
        displayArea.innerHTML += `<p>No Option Selected.</p>`
        return null
    }
}