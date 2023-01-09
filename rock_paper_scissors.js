
// Function that returns computer choice

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    return choiceName(compChoice);
}

// Function that returns name of choice as a string

function choiceName(num) {
    switch (num) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
        default:
            return 'Error';
    }
}

// Function that plays one round of Rock-Paper-Scissors


let resultPlayer = 0, resultComputer = 0;

function playOneRound(playerSelection, computerSelection) {

    let player, playerLower = playerSelection.toLowerCase(), numberPlayer, numberComputer;
    if (playerLower === 'rock')
        player = choiceName(1);
    else if (playerLower === 'paper')
        player = choiceName(2);
    else
        player = choiceName(3);

    const outcomeOne = 'Rock beats Scissors', outcomeTwo = 'Paper beats Rock', outcomeThree = 'Scissors beat Paper';

    // TODO optimize logic, conditions too long
    if (player === computerSelection)
        console.log("Draw!!");
    else {
        if ((player === 'Scissors' && computerSelection === 'Rock') || (player === 'Rock' && computerSelection === 'Scissors')) {
            if (player === 'Scissors') {
                console.log('Lose!!! ' + outcomeOne);
                resultComputer++;
            }

            else {
                console.log('Win!!! ' + outcomeOne);
                resultPlayer++;
            }

        }
        else if ((player === 'Paper' && computerSelection === 'Rock') || (player === 'Rock' && computerSelection === 'Paper')) {
            if (player === 'Rock') {
                console.log('Lose!!! ' + outcomeTwo);
                resultComputer++;
            }

            else {
                console.log('Win!!! ' + outcomeTwo);
                resultPlayer++;
            }

        }
        else {
            if (player === 'Paper') {
                console.log('Lose!!! ' + outcomeThree);
                resultComputer++;
            }

            else {
                console.log('Win!!! ' + outcomeThree);
                resultPlayer++;
            }

        }
    }
}


// function game() {

//     for (let i = 0; i < 5; i++)
//         playOneRound(prompt('Enter selection'), getComputerChoice());

//     if (resultComputer > resultPlayer)
//         console.log(`Computer wins with result : ${resultComputer} - ${resultPlayer}`);
//     else if (resultPlayer > resultComputer) {
//         console.log(`Player wins with result ${resultPlayer} - ${resultComputer}`);
//     }
//     else
//         console.log(`Draw with result : ${resultComputer} - ${resultPlayer}`);

//     resultComputer = resultPlayer = 0;
// }



const btnSelection = document.querySelectorAll('button');
const scorePlayer = document.querySelector('#scorePlayer');
const scoreComputer = document.querySelector('#scoreComputer');

btnSelection.forEach(btn => {
    btn.addEventListener('click', (e) => {
        playOneRound(btn.getAttribute('name'), getComputerChoice());
        console.log(resultComputer);
        console.log(resultPlayer);
        scoreComputer.innerText = resultComputer;
        scorePlayer.innerText = resultPlayer;
    })
})


function playGame(player, computer) {
    let resComp = 0, resPla = 0;

    if (player === computer)
        return;
    if (player !== 0 && player < computer)
        resComp++;
}