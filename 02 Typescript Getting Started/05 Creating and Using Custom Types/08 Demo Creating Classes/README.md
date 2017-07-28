# 08 Creating and Using Custom Types - Demo Creating Classes

- Creating a Person Class

``` javascript
class Player implements Person {
    name: string;
    age: number

    formatName() {
        return this.name.toUpperCase();
    }
}
```

