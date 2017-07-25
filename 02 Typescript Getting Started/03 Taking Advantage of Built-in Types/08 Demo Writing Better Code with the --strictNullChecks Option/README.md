# 08 Taking Advantage of Built-in Types - Demo Writing Better Code with the --strictNullChecks Option

If u enable the

```json
"strictNullChecks": true
```

carefully handle the null exceptions.

```javascript
let messagesElement: HTMLElement | null = document.getElementById('messages');
messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
document.getElementById('startGame')!.addEventListener('click', startGame);
```
