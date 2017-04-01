# Typing Variables and Functions - Grammar

- Basics of static Typing .


- Creating basic variables

```javascript
		var
    // Basics properties
    timerId: number = -1,
    interval: number = 25,
    ms: number = 0,
    seconds: number = 0,
    minutes: number = 0,
```

Creating  types for function parameters

```javascript
    init: (s: string, p: string, c: string) => void = function (startButton, pauseButton, clearButton) {
        document.getElementById(startButton).
            addEventListener("click", startTimer, false);
        document.getElementById(pauseButton).
            addEventListener("click", pauseTimer, false);
        document.getElementById(clearButton).
            addEventListener("click", clearTimer, false);
        displayTimer();
    };
```