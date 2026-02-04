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
    // inicia animação JO-KEN-PÔ
    showJokenpoText()
    resultDiv.textContent = ''

    // espera o "PÔ" para jogar
    setTimeout(() => {
        const machineChoice = playMachine()
        playTheGame(humanChoice, machineChoice)
    }, 850)

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
        resultDiv.style.color = 'white'
        empateScore++
    } else if (human === 'paper' && machine === 'stone' || human === 'stone' && machine === 'scissors' || human === 'scissors' && machine === 'paper') {
        resultDiv.innerHTML = "Você ganhou :)"
        resultDiv.style.color = '#28ff02'
        playerScore++
    } else {
        resultDiv.innerHTML = "Alexa ganhou ;("
        resultDiv.style.color = '#ff8000'
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

function showJokenpoText() {
  displayMyChoices.classList.add('jokenpo-mode')
  displayAlexaChoices.classList.add('jokenpo-mode')

  displayMyChoices.textContent = 'JO'
  displayAlexaChoices.textContent = 'JO'

  setTimeout(() => {
    displayMyChoices.textContent = 'KEN'
    displayAlexaChoices.textContent = 'KEN'
  }, 300)

  setTimeout(() => {
    displayMyChoices.textContent = 'PÔ'
    displayAlexaChoices.textContent = 'PÔ'

    displayMyChoices.classList.remove('shake')
    displayAlexaChoices.classList.remove('shake')

    displayMyChoices.offsetWidth
    displayAlexaChoices.offsetWidth

    displayMyChoices.classList.add('shake')
    displayAlexaChoices.classList.add('shake')
  }, 500)
}







