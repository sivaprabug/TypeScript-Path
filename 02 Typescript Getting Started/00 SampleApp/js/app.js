function startGame() {
    var basicString;
    basicString = null;
    basicString = undefined;
    var nullableString;
    nullableString = null;
    nullableString = undefined;
    var mysteryString;
    mysteryString = null;
    mysteryString = undefined;
    var playerName = 'Audrey';
    logPlayer(playerName);
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
    console.log('Starting new game.');
}
function logPlayer(name) {
    console.log("New game starting for player: " + name);
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map