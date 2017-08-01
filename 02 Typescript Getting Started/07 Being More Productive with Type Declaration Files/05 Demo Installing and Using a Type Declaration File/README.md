# 05 Being More Productive with Type Declaration Files - Demo Installing and Using a Type Declaration File

- Below url you can find
- [https://microsoft.github.io/TypeSearch/](https://microsoft.github.io/TypeSearch/)
- Navigate to npm page
- Check the versions
- Change in sytemjs config

```javascript
        System.config({
            paths: {
                'lodash': 'node_modules/lodash/lodash'
            },
            meta: {
                format: 'cjs'
            },
            packages: {
                '.': {
                    defaultExtension: 'js'
                }
            }
        });
        System.import('./js/app.js');
```
- And change in ts file also

```javascript
import { Result } from './result';
import * as _ from "lodash";

export class Scoreboard {
    private results: Result[] = [];

    addResult(newResult: Result): void {
        this.results.push(newResult);
        let allCapsName: string = _.upperCase(newResult.playerName);
        console.log(`${allCapsName}: ${newResult.score}`);
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
```