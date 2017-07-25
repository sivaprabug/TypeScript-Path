function startGame() {
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = "Multimath Player"; }
    console.log("New game starting for player: " + name);
}
function postScore(score, playerName) {
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = '${score}-${playerName}';
}
function getInputValue(elementId) {
    var inputElement = document.getElementById(elementId);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map