# 02 Writing Better Functions with TypeScript - Adding Type Annotations to Functions

```javascript
function dullFunc(value1, value2) {
    return "Return as string";
}

let dull = dullFunc(20, 30);
 console.log("dull ", dull);

function funFunc(score: number, message?: string): string {
    return "Return as string";
}

let fun = funFunc(20,'Sivaprabu');
 console.log("fun ", fun);
```