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
let someNumber = Math.floor(Math.random() * 100)
let someString = ""

optionSelected.addEventListener("change", function () {
    displayArea.innerHTML = ""
    console.log(optionSelected.value)
    if (optionSelected.value === 'image-array') {
        console.log("image array: " + (optionSelected.value === 'image-array'))

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
        displayArea.innerHTML = `<p>${someNumber}</p>`
    } else {
        console.log("How did you get here?")
    }
})