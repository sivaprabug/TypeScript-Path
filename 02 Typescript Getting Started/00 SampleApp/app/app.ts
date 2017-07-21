function startGame() {
    // Starting a new game
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to Game !'
    console.log('Welcome to Game');
}

document.getElementById('startGame').addEventListener("click", startGame);   