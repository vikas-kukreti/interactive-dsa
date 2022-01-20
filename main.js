let arr = []

let input = document.querySelector('#input')
let arrayElement = document.querySelector('#array')
let arrayOutputElement = arrayElement.querySelector('.output')

let addButton = arrayElement.querySelector('.controls .add')
let removeButton = arrayElement.querySelector('.controls .remove')
let sortButton = arrayElement.querySelector('.controls .sort')
const searchButton = arrayElement.querySelector('.search')
//* event listeners

function printArray() {
    arrayOutputElement.innerHTML = ''
    if(arr.length === 0) {
        arrayOutputElement.innerHTML = 'Empty'
    }
    for(let i=0; i<arr.length; i++) {
        arrayOutputElement.innerHTML += '<span class="array-item">' + arr[i] + '</span>'
    }
}

function addItem() {
    if(input.value != '') {
        arr.push(input.value)
        input.value = ''
        printArray()
    }
}

//! higher order function
//! callback function


function removeItem() {
    if(arr.indexOf(input.value) != -1) {
        arr = arr.filter(x => input.value != x)
        printArray()
    } else {
        alert('The value you want to delete does not exists!')
    }
}

function sortArray() {
    arr.sort((a, b) => a - b)
    printArray()
}


addButton.onclick = addItem
removeButton.onclick = removeItem
sortButton.onclick = sortArray
searchButton.onclick = () => {
    if(arr.indexOf(input.value) === -1) {
        alert('Element does not exists!')
    } else {
        alert('Element exists!')
    }
}

printArray()