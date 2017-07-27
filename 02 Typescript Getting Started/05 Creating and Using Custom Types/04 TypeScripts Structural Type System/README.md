# 04 Creating and Using Custom Types - TypeScripts Structural Type System

```javascript
interface Employee {
    name: string;
    title: string;
}

let developer = {
    name: 'Sivaprabu',
    title: 'Senior System Software Engineer',
    editor: 'Visual Studio Code'
}
let newEmployee: Employee = developer;
```