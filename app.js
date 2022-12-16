let randomNumber = generateRandomNum();
let rounds = 3;
const input = document.getElementById('guess-input');
const form = document.querySelector('form');
console.log(randomNumber);
const message = document.querySelector('.message');
const submitBtn = document.querySelector('#guess-value');



function onSubmit(e) {
    e.preventDefault();
    const value = parseInt(input.value);
    if(!rounds || value < 1 || value > 10) {
        return;
    }

    rounds -= 1;

    if(value === randomNumber) {
        setMessage("Congrats! You've guessed the right number!", 'green')
        rounds = 0;
        renameButton();
        return;
    } 

    if(rounds){
        setMessage(`You guessed wrong number, you have ${rounds} guesses left`);
        return;
    }
    
    setMessage(`You lost, press Play again to start new game`);
    renameButton()
}

form.addEventListener('submit', onSubmit);

function onButtonClick(e) {
    if(submitBtn.value === 'Play again') {
        input.value = null;
        rounds = 3;
        message.innerText = '';
        randomNumber = generateRandomNum();
        submitBtn.value = 'submit';
        console.log(randomNumber);
        }
}

submitBtn.addEventListener('click', onButtonClick);

function generateRandomNum(){
    return Math.floor(Math.random()*10+1);
}

function renameButton() {
    submitBtn.value = 'Play again';
}

function setMessage(msg, color = 'red') {
    message.innerText = msg;
    message.classList.value = color;
}
