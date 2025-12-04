function getComputerChoice(){
   let number = Math.floor(Math.random() * 3)
    if (number === 0){
    return "rock"
    }
    else if (number === 1){
    return "paper"
    }
    else {
    return "scissors"
    }
}

function getHumanChoice(){
     return prompt("rock, paper or scissors?: ")
}

let humanScore = 0

let computerScore = 0

function playRound(humanChoice, ComputerChoice){
    if (humanChoice === "rock" && ComputerChoice === "paper"){
        computerScore += 1
        return "You lose! paper beats rock"
    }
    else if (ComputerChoice === "rock" && humanChoice === "paper"){
        humanScore += 1
        return "You win! paper beats rock"
    }
    else if (humanChoice === "paper" && ComputerChoice === "scissors"){
        computerScore += 1
        return "You lose! scissors beats paper"
    }
    else if (humanChoice === "scissors" && ComputerChoice === "paper"){
        humanScore += 1
        return "You win! scissors beats paper"
    }
    else if (humanChoice === "rock" && ComputerChoice === "scissors"){
        humanScore += 1
        return "You win! rock beats scissors"
    }
    else if (humanChoice === "scissors" && ComputerChoice === "rock") {
        computerScore += 1
        return "You lose! rock beats scissors"
    }
    else{
        return "it's a tie!"
    }

}


function playGame () {
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice()
    console.log(`You: ${humanSelection} | Computer: ${computerSelection}`)
    console.log(playRound(humanSelection , computerSelection))
    console.log(`You: ${humanScore} | Computer: ${computerScore}`)
    console.log("----------------------------------------------")
}

function result(){
    if (computerScore > humanScore){
        console.log("You lose! score: computer:" + computerScore + " | you:" + humanScore)
    }
    else if (computerScore < humanScore){
        console.log("You win! score: computer:" + computerScore + " | you:" + humanScore)
    }
    else {
        console.log("it's a tie!")
    }
}

playGame()
playGame()
playGame()
playGame()
playGame()
result()






