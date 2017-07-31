import { Result } from './result';

export class Scoreboard {
    private results: Result[] = [];

    addResult(newResult: Result): void {
        this.results.push(newResult);
    }

    updateScoreboard(): void {
    
        let output: string = '<h2>Scoreboard</h2>';
    
        // loop over all results and create the html for the scoreboard
        for (let index = 0; index < this.results.length; index++) {
            let result: Result = this.results[index];
            output += '<h4>';
            output += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>';
        }
    
        // add the updated scoreboard to the page
        let scoresElement: HTMLElement = document.getElementById('scores')!;
        scoresElement.innerHTML = output;
    }
}