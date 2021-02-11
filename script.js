// for dev tool testing
console.log("testing")

const STATE = ["Rock", "Paper", "Scissor"]

// select btn
const btnRock = document.querySelector(".rock")
const btnPaper = document.querySelector(".paper")
const btnScissor = document.querySelector(".scissor")

// select container
const container = document.querySelector("#container")

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
    if (computer === "scissor") {
      return player
    }
    if (computer === "paper") {
      return computer
    }
    return "draw"
  }

  if (player === "scissor") {
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
    if (computer === "scissor") {
      return computer
    }
    return "draw"
  }
}
// unction that plays a single round of Rock Paper Scissors
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
  const result = playRound(playerSelection, computerSelection)
  if (
    result === playerSelection.toLowerCase() &&
    computerSelection.toLowerCase() !== result
  ) {
    // console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else if (
    result === computerSelection.toLowerCase() &&
    playerSelection.toLowerCase() !== result
  ) {
    // console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  } else {
    // console.log(`It's Draw! `)
    return `It's Draw! `
  }
  // }
}

// create anothe div for result status
function createResult(output) {
  const refchild = document.querySelector(".select")
  const result = document.createElement("div")
  result.textContent = output
  result.setAttribute(
    "style",
    "font-size: 1.5rem; color: rgba(231, 20, 20, 0.822);"
  )
  container.insertBefore(result, refchild)
}

// Actionlisten for button
btnRock.addEventListener("click", () => {
  const output = game("Rock")
  createResult(output)
})

btnScissor.addEventListener("click", () => {
  const output = game("paper")
  createResult(output)
})

btnPaper.addEventListener("click", () => {
  const output = game("scissor")
  createResult(output)
})

game()
