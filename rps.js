let userScore = 0;
let computerScore = 0;

//edit lines 5 through 11 to match HTML
const userScore_span = document.getElementById(""); //Add HTML ID here
const computerScore_span = document.getElementById(""); //Add HTML ID here
const scoreBoard_div = document.querySelector("") // Add HTML ID here
const result_p = document.querySelector("") // Add HTML ID here
const rock_div = document.getElementById ("") // Add HTML ID here
const paper_div = document.getElementById ("") // Add HTML ID here
const scissors_div = document.getElementById ("") // Add HTML ID here
//Don't edit below this line

function getComputerChoice(){
    const choices = ['r', 'p','s']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];
}

function conversion(x){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(uChoice, cChoice){
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const user = 'user'.fontsize(3).sub();
    const comp = 'comp'.fontsize(3).sub();
    result_p.innerHTML = `${conversion(uChoice)}${user} beats ${conversion(cChoice)}${comp}`;
}

function lose(uChoice, cChoice){
    computerScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const user = 'user'.fontsize(3).sub();
    const comp = 'comp'.fontsize(3).sub();
    result_p.innerHTML = `${conversion(cChoice)}${user} beats ${conversion(uChoice)}${comp}`;
}

function draw(uChoice, cChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${conversion(cChoice)}${user} is the same as  ${conversion(uChoice)}${comp}`;
}

function game(userChoice){
    const computerChoice = getComputerChoice;
    switch(userChoice + computerChocie){
        case "rs":
        case "pr":
        case "sp":
            console.log('You win!')
            break;
            win(uChoice, cChoice); // create win function
        case "rp": 
        case "ps":
        case "sr":
            console.log('You lose!')
            break;
            lose(uChoice, cChoice); //create lose function
        case "rr":
        case "pp":
        case "ss":
            console.log('You draw!')
            break;
            draw(uChoice, cChoice); // create draw function
    }
}

function main(){
rock_div.addEventListener('click', function(){
    game("r");
})

paper_div.addEventListener('click', function(){
    game("p");
})

scissors_div.addEventListener('click', function(){
    game("s");
})

}

main();