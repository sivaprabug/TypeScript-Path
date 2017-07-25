# 06 Taking Advantage of Built-in Types - Union Types and the --strictNullChecks Compiler Option

### Union Types

```javascript
let someValue: number| string;
someValue= 42;
someValue= 'Hello World';
someValue= true;

//Using the --strictNullChecksCompiler Option

let basicString: string;
basicString= null;
basicString= undefined;

let nullableString: string| null;
nullableString= null;
nullableString= undefined;

let mysteryString: string| null| undefined;
mysteryString= null;
mysteryString= undefined;
```