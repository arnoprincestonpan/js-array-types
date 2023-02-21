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


optionSelected.addEventListener("change", function () {
    displayArea.innerHTML = ""
    console.log(optionSelected.value)
    if (optionSelected.value === 'image-array') {
        console.log("image array: " + (optionSelected.value === 'image-array'))

        let imageWidth = 247
        let imageHeight = 359
        let imageArray = new Array()

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

        let arrayStrings = ["Peter", "Stewie", "Brian", "Chris", "Quagmire"]
        displayArea.innerHTML += "<ul>"
        arrayStrings.forEach(string => {
            displayArea.innerHTML += "<li>" + string + "</li>"
        })
        displayArea.innerHTML += "</ul>"
    } else if (optionSelected.value === 'number-array') {
        console.log("number array: " + (optionSelected.value === 'number-array'))

        let arrayNumbers = [1, 2, 3, 4, 5, 6]
        displayArea.innerHTML += "<ul>"
        arrayNumbers.forEach(number => {
            displayArea.innerHTML += "<li>" + number + "</li>"
        })
        displayArea.innerHTML += "</ul>"
    } else if (optionSelected.value === 'empty-array') {
        console.log("empty array: " + (optionSelected.value === 'empty-array'))

        let arrayEmpty = []
        displayArea.innerHTML += "<ul>" + arrayEmpty + "<ul>"
    } else if (optionSelected.value === 'string') {
        console.log("string: " + (optionSelected.value === 'string'))
    } else if (optionSelected.value === 'number') {
        console.log("number: " + (optionSelected.value === 'number'))
    } else {
        console.log("How did you get here?")
    }
})