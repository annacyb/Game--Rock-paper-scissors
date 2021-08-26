let countdownPlayer = 0
let countdownComputer = 0
let round = 1
let computersChoice
let playersChoice

startGame()

function startGame() {
    getComputersChoice()
    getPlayerChoice()
}

function getComputersChoice() {
    //RANDOM CHOICE SOMEHOW
    //save computers choice in computersChoice
    computersChoice = "rock"
}


function getPlayerChoice() {
    document.querySelector(".rock").addEventListener("click", playersChoiceRock)
    document.querySelector(".paper").addEventListener("click", playersChoicePaper)
    document.querySelector(".scissors").addEventListener("click", playersChoiceScissors)
}

function playersChoiceRock() {
    console.log("rock")

    if (computersChoice == "scissors") {
        round++
        countdownPlayer++
        //animation showing what is choosen
        alert("You won! +1pt")
        setTimeout(determineWinner, 3000)
    }
    else if (computersChoice == "rock") {
        round++
        //animation showing what is choosen
        alert("It's a tie")
        setTimeout(determineWinner, 3000)
    }

    else if(computersChoice == "paper") {
        round++
        countdownComputer++
        //animation showing what is choosen
        alert("You lose! -1pt")
        setTimeout(determineWinner, 3000)
    }
}

function playersChoicePaper() {
    console.log("paper")

    if (computersChoice == "rock") {
        round++
        countdownPlayer++
        //animation showing what is choosen
        alert("You won! +1pt")
        setTimeout(determineWinner, 3000)
    }
    else if (computersChoice == "paper") {
        round++
        //animation showing what is choosen
        alert("It's a tie")
        setTimeout(determineWinner, 3000)
    }

    else if(computersChoice == "scissors") {
        round++
        countdownComputer++
        //animation showing what is choosen
        alert("You lose! -1pt")
        setTimeout(determineWinner, 3000)
    }
}

function playersChoiceScissors() {
    console.log("scissors")

    if (computersChoice == "paper") {
        round++
        countdownPlayer++
        //animation showing what is choosen
        alert("You won! +1pt")
        setTimeout(determineWinner, 3000)
    }
    else if (computersChoice == "scissors") {
        round++
        //animation showing what is choosen
        alert("It's a tie")
        setTimeout(determineWinner, 3000)
    }

    else if(computersChoice == "rock") {
        round++
        countdownComputer++
        //animation showing what is choosen
        alert("You lose! -1pt")
        setTimeout(determineWinner, 3000)
    }
}


function showAnimations() {
    determineWinner()
}

function determineWinner() {
    
    if (countdownComputer == 0 & countdownPlayer == 0 & round > 1) {
        showTie()
    }
    if (countdownComputer == 3) {
        showLose()
    }
    if (countdownPlayer == 3) {
        showWin()
    }
    else {

    }
}

function showWin() {
    alert("You WOOON")
}

function showLose() {
    alert("You LOOOSE")
}

function showTie() {
    alert("TIEEE")
}


