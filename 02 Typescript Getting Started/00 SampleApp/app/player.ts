/// <reference path="person.ts" />

class Player implements Person {
    name: string;
    age: number;
    highScore: number;

    formatName() {
        console.log("Calling formatName()");
        return this.name.toUpperCase();
    }
}