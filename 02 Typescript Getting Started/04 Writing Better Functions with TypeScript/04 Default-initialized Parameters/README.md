# 04 Writing Better Functions with TypeScript - Default-initialized Parameters

```javascript
function greeting(message: string = "Good Morning"): void {
    console.log("message ", message);
}

greeting();
greeting("Good Night");
```