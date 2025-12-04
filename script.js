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

let humanScore = 0   // keep count of scores

let computerScore = 0


// one round played and updating scores

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


// play game function logs your and computer's choices and keeping you upadated with scores

function playGame () { 
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice()
    console.log(`You: ${humanSelection} | Computer: ${computerSelection}`)
    console.log(playRound(humanSelection , computerSelection))
    console.log(`You: ${humanScore} | Computer: ${computerScore}`)
    console.log("----------------------------------------------")
}


// this function prints result after five rounds

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

//for this time i did not used loops 

playGame()
playGame()
playGame()
playGame()
playGame()
result()






