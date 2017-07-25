# 04 Taking Advantage of Built-in Types - Demo Using let and const with Type Annotations

- Adding functions and parameters
 - let
 - const
 - var

``` javascript
function startGame() {
    // starting a new game

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
```