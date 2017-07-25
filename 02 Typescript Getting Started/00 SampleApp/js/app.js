function dullFunc(value1, value2) {
    return "Return as string";
}
var dull = dullFunc(20, 30);
console.log("dull ", dull);
function funFunc(score, message) {
    return "Return as string";
}
var fun = funFunc(20, 'Sivaprabu');
console.log("fun ", fun);
function startGame() {
    var value = 5.5678;
    console.log(value);
    var fixedString = value.toFixed(2);
    console.log(fixedString);
    var fixedStrings = value.toFixed(3);
    console.log(fixedStrings);
    var playerName = 'Audrey';
    logPlayer(playerName);
    var messagesElement = document.getElementById('messages');
    if (messagesElement === null) {
        return messagesElement;
    }
    else {
        console.log(messagesElement);
        messagesElement = document.getElementById('messages');
    }
    var element = messagesElement;
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
    console.log('Starting new game.');
}
function logPlayer(name) {
    console.log("New game starting for player: " + name);
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map