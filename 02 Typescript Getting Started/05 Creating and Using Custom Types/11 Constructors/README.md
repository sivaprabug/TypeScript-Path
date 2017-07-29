# 11 Creating and Using Custom Types - Constructors

- Contructors are inside the class

```javascript
class Developers {
    constructor() {
        console.log('Creating a new developer.');
    }
}

let greeter = new Developers();

class WebDeveloperClass extends Developers {
    readonly favoriteEditor: string;
    constructor(editor: string) {
        super();
        this.favoriteEditor = editor;
    }
}
```