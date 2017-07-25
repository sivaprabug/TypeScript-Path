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
    let element = messagesElement!;
    console.log(element);
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
    console.log('Starting new game.');
}

function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);