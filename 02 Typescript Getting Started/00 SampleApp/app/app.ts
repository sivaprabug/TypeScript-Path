/// <reference path="player.ts" />

function startGame() {
    // starting a new game

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(80, playerName);
    postScore(-5, playerName);
}

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`New game starting for player: ${name}`);
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {

    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }

    let scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

function getInputValue(elementID: string): string | undefined {

    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}

document.getElementById('startGame')!.addEventListener('click', startGame);

let logMessage = (message: string) => console.log(message);

function logError(error: string): void {
    console.error(error);
}

/*let myResult: Result = {
    playerName: "Sivaprabu",
    score: 20,
    problemcount: 5,
    factor: 5
};

let player: Person = {
    name: 'Pranav Sivaprabu',
    formatName: () => 'Pranav'
}*/


let firstPlayer: Player = new Player();
firstPlayer.name = "Sivaprabu";

console.log(firstPlayer.formatName());



class Developer {
    department: string;
    private _title: string;
    get title(): string {
        return this._title;
    }
    set title(newTitle: string) {
        this._title = newTitle.toUpperCase();
    }
    documentRequirements(requirements: string): void {
        console.log(requirements);
    }
}

class WebDeveloper extends Developer {
    static jobDescription: string = 'Build cool things!';
    static logFavoriteProtocol() {
        console.log('HTTPS, of course!');
    }
    logJobDescription(): void {
        console.log(WebDeveloper.jobDescription);
    }
}
WebDeveloper.logFavoriteProtocol();


class Developers {
    constructor() {
        console.log('Creating a new developer.');
    }
}

let greeter = new Developers();

class WebDeveloperClass extends Developers {
    readonly favoriteEditor: string;
    constructor(editor: string) {
        super();
        this.favoriteEditor = editor;
    }
}