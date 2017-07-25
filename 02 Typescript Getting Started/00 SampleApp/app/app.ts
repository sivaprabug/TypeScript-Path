function startGame() {
    // starting a new game
    //Using the --strictNullChecksCompiler Option

    let basicString: string;
    basicString = null;
    basicString = undefined;

    let nullableString: string | null;
    nullableString = null;
    nullableString = undefined;

    let mysteryString: string | null | undefined;
    mysteryString = null;
    mysteryString = undefined;

    let playerName: string = 'Audrey';
    logPlayer(playerName);

    let messagesElement: HTMLElement | null = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
    console.log('Starting new game.');
}

function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);