const resultDiv = document.querySelector('.result')
const myScore = document.querySelector('#my-score')
const alexaScore = document.querySelector('#alexa-score')
const empate = document.querySelector('#empate')
const displayMyChoices = document.querySelector('.display-my-choice')
const displayAlexaChoices = document.querySelector('.display-alexa-choice')
const loaders = document.querySelectorAll('.loader')

const images = {
    stone: 'assets/rochas.png',
    paper: 'assets/paper.png',
    scissors: 'assets/scissors.png'
}


let playerScore = 0
let alexScore = 0
let empateScore = 0

const playHuman = (humanChoice) => {
    showLoading()

    setTimeout(() => {
        const machineChoice = playMachine()
        playTheGame(humanChoice, machineChoice)
        hideLoading()
    }, 1000)

}
const playMachine = () => {
    const choicesComputer = ['stone', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * choicesComputer.length);
    const computerChoice = choicesComputer[randomIndex]

    return computerChoice
}

const playTheGame = (human, machine) => {
    console.log(`Humano: ${human} Maquina: ${machine}`)
    if (human === machine) {
        resultDiv.innerHTML = "Deu empate!"
        empateScore++
    } else if (human === 'paper' && machine === 'stone' || human === 'stone' && machine === 'scissors' || human === 'scissors' && machine === 'paper') {
        resultDiv.innerHTML = "Você ganhou!"
        playerScore++
    } else {
        resultDiv.innerHTML = "Alexa ganhou!"
        alexScore++
    }
    myScore.innerHTML = playerScore
    alexaScore.innerHTML = alexScore
    empate.innerHTML = empateScore

    displayMyChoices.innerHTML = `
  <img src="${images[human]}" alt="${human}">`
    displayAlexaChoices.innerHTML = `
  <img src="${images[machine]}" alt="${machine}">`

}


function showLoading() {
  loaders.forEach(loader => loader.style.display = 'block')
  displayMyChoices.style.display = 'none'
  displayAlexaChoices.style.display = 'none'
  resultDiv.innerHTML = ''
}

function hideLoading() {
  loaders.forEach(loader => loader.style.display = 'none')
  displayMyChoices.style.display = 'block'
  displayAlexaChoices.style.display = 'block'
}





