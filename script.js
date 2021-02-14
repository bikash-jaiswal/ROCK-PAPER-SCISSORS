// for dev tool testing
console.log("testing")

const STATE = ["Rock", "Paper", "Scissors"]

// select btn
const btnRock = document.querySelector(".rock")
const btnPaper = document.querySelector(".paper")
const btnScissor = document.querySelector(".scissor")

// select container
const container = document.querySelector("#container")
const btnReset = document.querySelector(".reset")
// select player figure
const display_player = document.querySelector(".display_player")
const display_computer = document.querySelector(".display_computer")

// select player score
const player_score = document.querySelector(".player_score")
const computer_score = document.querySelector(".computer_score")

// random return ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
  const randm = Math.floor(Math.random() * STATE.length)
  return STATE[randm]
}

// for ( let i =0;i<20;i++){
//     computerPlay()
// }

function compareState(player, computer) {
  // 1. Rock beat scissor
  // 2. paper beat rock
  // 3. scissor beat paper
  if (player === "rock") {
    if (computer === "scissors") {
      return player
    }
    if (computer === "paper") {
      return computer
    }
    return "draw"
  }

  if (player === "scissors") {
    if (computer === "rock") {
      return computer
    }
    if (computer === "paper") {
      return player
    }
    return "draw"
  }

  if (player === "paper") {
    if (computer === "rock") {
      return player
    }
    if (computer === "scissors") {
      return computer
    }
    return "draw"
  }
}

let playerScore = 0
let computerScore = 0

// function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  const playerstate = playerSelection.toLowerCase()
  const computerstate = computerSelection.toLowerCase()
  const winner = compareState(playerstate, computerstate)
  return winner
}

// count the score and report the winner
function game(userChoice) {
  // for (let i = 0; i < 5; i++) {
  const playerSelection = userChoice
  const computerSelection = computerPlay()
  display_player.innerHTML = `<i class="fas fa-hand-${userChoice.toLowerCase()} fa-8x"></i>`
  display_computer.innerHTML = `<i class="fas fa-hand-${computerSelection.toLowerCase()} fa-8x"></i>`
  const result = playRound(playerSelection, computerSelection)
  if (
    result === playerSelection.toLowerCase() &&
    computerSelection.toLowerCase() !== result
  ) {
    // console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    playerScore += 1
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else if (
    result === computerSelection.toLowerCase() &&
    playerSelection.toLowerCase() !== result
  ) {
    // console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    computerScore += 1
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  } else {
    // console.log(`It's Draw! `)
    return `It's Draw! `
  }
  // }
}

// create anothe div for result status
function createResult(output) {
  let result = document.querySelector(".resultdisplay")
  if (document.body.contains(result)) {
    result.remove()
  }
  const refchild = document.querySelector(".select")
  result = document.createElement("div")
  result.textContent = output
  result.setAttribute("class", "resultdisplay")
  container.insertBefore(result, refchild)
}

//
function bestOfFive() {
  if (playerScore > 4 || computerScore > 4) {
    return true
  }
}

// eventlister util function DRY
function listenerUtil(mode) {
  if (!bestOfFive()) {
    const output = game(mode)
    createResult(output)
    console.log(`player:${playerScore} and computer: ${computerScore}`)
    player_score.textContent = `Score : ${playerScore}`
    computer_score.textContent = `Score : ${computerScore}`
  } else {
    const choices = document.querySelector(".choices")
    choices.remove()
    const showReset = document.querySelector(".choice")
    showReset.classList.toggle("show")
  }
}

// Actionlisten for button
btnRock.addEventListener("click", () => {
  listenerUtil("rock")
})

btnScissor.addEventListener("click", () => {
  listenerUtil("scissors")
})

btnPaper.addEventListener("click", () => {
  listenerUtil("paper")
})

btnReset.addEventListener("click", () => {
  document.location.reload()
})

game()
