# 05 Writing Better Functions with TypeScript - Demo Adding Type Annotations and Default Parameter Values

- Adding type annotations and default parameter values.

```javascript
function startGame() {
    // starting a new game
    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);
}

function logPlayer(name: string = "Multimath Player"): void {
    console.log(`New game starting for player: ${name}`);
}

function postScore(score: number, playerName?: string): void {
    let scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = '${score}-${playerName}';
}


function getInputValue(elementId: string): string | undefined {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
    if (inputElement.value === '') {
        return undefined;
    } else {
        return inputElement.value;
    }
}

document.getElementById('startGame')!.addEventListener('click', startGame);
```