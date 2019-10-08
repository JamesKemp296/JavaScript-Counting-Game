// declaring all of my variables

const resetButton =  document.querySelector('#reset-button')
const submitButton =  document.querySelector('#submit-button')
const plusOne = document.querySelector('#plus-1')
const plusTwo = document.querySelector('#plus-2')
const plusFive = document.querySelector('#plus-5')
const minusOne = document.querySelector('#minus-1')
const minusTwo = document.querySelector('#minus-2')
const minusFive = document.querySelector('#minus-5')
let userNumber = 0
let randomNumber = Math.floor(Math.random() * 100) + 1

// All of my event listeners

resetButton.addEventListener('click', createRandomNumber)
submitButton.addEventListener('click', checkIfEqual)
plusOne.addEventListener('click', addOne)
plusTwo.addEventListener('click', addTwo)
plusFive.addEventListener('click', addFive)
minusOne.addEventListener('click', subtractOne)
minusTwo.addEventListener('click', subtractTwo)
minusFive.addEventListener('click', subtractFive)

//functions

function createRandomNumber(){
    randomNumber = Math.floor(Math.random() * 100) + 1
    document.querySelector('#random-number').textContent = randomNumber 
    userNumber = 0
    document.querySelector('#user-number').textContent = userNumber
}
function convertToNumber(){
    Number(randomNumber)
    Number(usermNumber)
}
function addOne(){
    userNumber += 1
    document.querySelector('#user-number').textContent = userNumber
}
function addTwo(){
    userNumber += 2
    document.querySelector('#user-number').textContent = userNumber
}
function addFive(){
    userNumber += 5
    document.querySelector('#user-number').textContent = userNumber
}
function subtractOne(){
    userNumber -= 1
    document.querySelector('#user-number').textContent = userNumber
}
function subtractTwo(){
    userNumber -= 2
    document.querySelector('#user-number').textContent = userNumber
}
function subtractFive(){
    userNumber -= 5
    document.querySelector('#user-number').textContent = userNumber
}
function checkIfEqual() {
    if (randomNumber === userNumber){
        alert('YOU DID IT')
        createRandomNumber()
    } else {
        alert('WRONG ANSWER \nKEEP TRYING')
    }
}