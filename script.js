let userscore = 0
let computerscore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score")
const computerscorePara = document.querySelector("#computer-score")

const genComChoice = () =>{
    const options = ['rock', 'paper', 'scissors']
    const ranInd = Math.floor(Math.random() * 3)
    return options[ranInd]
}
const DrawGame = () =>{
    msg.innerText="Game was draw! Play Again!"
    msg.style.backgroundColor = "blue";
}
const showWinner = (userWin, userChoice, computerChoice) =>{
    if(userWin){
        userscore++
        userscorePara.innerText = userscore
        msg.innerText=`You Win! your ${userChoice} beats ${computerChoice}`
        msg.style.backgroundColor = "green";
    } else{
        computerscore++
        computerscorePara.innerText = computerscore
        msg.innerText=`You Loss! ${computerChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{
    const computerChoice = genComChoice();
    if (userChoice === computerChoice){
        DrawGame();
    }else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = computerChoice === "paper" ? false: true;
        }else if (userChoice === "paper"){
            userWin = computerChoice === "scissor" ? false: true;
        }else {
            userWin = computerChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, computerChoice)
    }
}

choices.forEach((choice) =>{
    //console.log(choice)
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})