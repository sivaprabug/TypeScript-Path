var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = (function () {
    function Player() {
    }
    Player.prototype.formatName = function () {
        console.log("Calling formatName()");
        return this.name.toUpperCase();
    };
    return Player;
}());
function startGame() {
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(80, playerName);
    postScore(-5, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = 'MultiMath Player'; }
    console.log("New game starting for player: " + name);
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = 'MultiMath Player'; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = score + " - " + playerName;
    logger("Score: " + score);
}
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
document.getElementById('startGame').addEventListener('click', startGame);
var logMessage = function (message) { return console.log(message); };
function logError(error) {
    console.error(error);
}
var firstPlayer = new Player();
firstPlayer.name = "Sivaprabu";
console.log(firstPlayer.formatName());
var Developer = (function () {
    function Developer() {
    }
    Object.defineProperty(Developer.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (newTitle) {
            this._title = newTitle.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    Developer.prototype.documentRequirements = function (requirements) {
        console.log(requirements);
    };
    return Developer;
}());
var WebDeveloper = (function (_super) {
    __extends(WebDeveloper, _super);
    function WebDeveloper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebDeveloper.logFavoriteProtocol = function () {
        console.log('HTTPS, of course!');
    };
    WebDeveloper.prototype.logJobDescription = function () {
        console.log(WebDeveloper.jobDescription);
    };
    WebDeveloper.jobDescription = 'Build cool things!';
    return WebDeveloper;
}(Developer));
WebDeveloper.logFavoriteProtocol();
//# sourceMappingURL=app.js.map