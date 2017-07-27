# 05 Creating and Using Custom Types - Demo Creating Interfaces
````javascript
//result.ts

interface Result {
    playerName: string,
    score: number,
    problemcount: number,
    factor: number
}


// person.ts

interface Person {
    name: string,
    age?: number,
    formatName: () => string
}

// app.ts

let myResult: Result = {
    playerName: "Sivaprabu",
    score: 20,
    problemcount: 5,
    factor: 5
};

let player: Person = {
    name: 'Pranav Sivaprabu',
    formatName: () => 'Pranav'
}
```