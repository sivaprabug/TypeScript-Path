
function greeting(message: string = "Good Morning"): void {
    console.log("message ", message);
}

greeting();
greeting("Good Night");

function dullFunc(value1, value2) {
    return "Return as string";
}

let dull = dullFunc(20, 30);
console.log("dull ", dull);

function funFunc(score: number, message?: string): string {
    return "Return as string";
}

let fun = funFunc(20, 'Sivaprabu');
console.log("fun ", fun);

function startGame() {
    let value: any = 5.5678;
    console.log(value)
    let fixedString: string = (<number>value).toFixed(2);
    console.log(fixedString); // 5.00

    let fixedStrings: string = (value as number).toFixed(3);
    console.log(fixedStrings); // 5.0000


    // starting a new game

    let playerName: string = 'Audrey';
    logPlayer(playerName);

    let messagesElement: HTMLElement | null = document.getElementById('messages');
    if (messagesElement === null) {
        return messagesElement;
    } else {
        console.log(messagesElement);
        messagesElement = document.getElementById('messages');
    }

    let element = messagesElement!;

    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
    console.log('Starting new game.');
}

function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);