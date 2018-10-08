//kata 1

//execute function once for each array element

function forEachKata(array, callback) {



    for (let i = 0; i < array.length; i++) {
        const value = array[i]
        console.log(callback(value, i, array))
    }
}

const numbers = [3, 10, 18, 20]

forEachKata(numbers, function (number, i, array) {

    const numberValue =
        number === 3 || number === 10 || number === 18 || number === 20
    console.log(`The number '${number}' is at position '${i}' of '${array}'`)
})


//kata 2

//create new array with the results of called function


function mapKata(array, callbackMap) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const value = array[i]
        newArray.push(callbackMap(value, i, newArray))
    }

    return newArray

}

let doubleNumbers = mapKata(numbers, function (number, i, array) {
    return (number * 2)
})

console.log(doubleNumbers)




// //kata 3

// //searching the array for numbers less than 10



function someKata(array, callbackSome) {

    for (let i = 0; i < array.length; i++) {

        const value = array[i]
        callbackSome(value, i, array)

    }
}

someKata(numbers, function (number, i, array) {
    const numbers = [3, 10, 18, 20]
    const numberThree = 3
    const oddNumber = numberThree ? true : false
    console.log(oddNumber)



})





// //kata4

// //return first number that meets condition of statement

function findKata(array, callbackFind) {

    for (let i = 0; i < array.length; i++) {
        const value = array[i]
        let find = callbackFind(value, i, array)
        if (find === true) return value

    }

    return undefined
}

let findValue = findKata(numbers, function (number, i, array) {
    return number >= 11
})

console.log(findValue)




// //kata5

// // return the index of the first element that is greater than 10

function findIndexKata(array, callbackFindIndex) {

    for (let i = 0; i < array.length; i++) {
        const value = array[i]
        callbackFindIndex(value, i, array)
    }
}

findIndexKata(numbers, function (number, i, array) {
    const greaterThanTen = []
    if (number > 10) {
        console.log(`The number ${number} is at position ${i}`)
    }
})


// //kata6

// // return true if every item in array meets condition

function everyKata(array, callbackFindEvery) {

    for (i = 0; i < array.length; i++) {
        const value = array[i]
        callbackFindEvery(value, i, array)

    }
}
everyKata(numbers, function (number, index, array) {
    const numbersGreaterThan10 = (numbers < 10) ? true : false;
    console.log(numbersGreaterThan10)
})


// //kata7

// // create a new array with all elements that pass the test given by the function
// if number is greater than 10

function filterKata(array, callbackFilter) {

    let matchingNumbers = []

    for (i = 0; i < array.length; i++) {
        const value = array[i]
        let match = matchingNumbers.push(callbackFilter(value, i, matchingNumbers))
    }

    return matchingNumbers
}

let newNumber = filterKata(numbers, function (number, i, array) {

    if (number > 10) {

        return number
    } else {
        return ""
    }

})

console.log(newNumber)