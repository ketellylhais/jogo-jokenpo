const resultDiv = document.querySelector('.result')
const myScore = document.querySelector('.my-score')
const alexaScore = document.querySelector('.alexa-score')
let playerScore = 0;
let alexScore = 0;

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
   
}
const playMachine = () => {
    const choicesComputer = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choicesComputer.length);
    const computerChoice = choicesComputer[randomIndex];

    return computerChoice
}

const playTheGame = (human, machine) => {
    console.log(`Humano: ${human} Maquina: ${machine}`)
    if( human === machine){
        resultDiv.innerHTML = "Deu empate!"
        playerScore ++
        alexScore ++
    } else if (human === 'paper' && machine === 'rock' || human === 'rock' && machine === 'scissors' || human === 'scissors' && machine === 'paper'){
        resultDiv.innerHTML = "Você ganhou!"
        playerScore ++
    } else {
        resultDiv.innerHTML = "Alexa ganhou!"
        alexScore ++
    }
    myScore.innerHTML = playerScore
    alexaScore.innerHTML = alexScore
}







