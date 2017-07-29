# 09 Creating and Using Custom Types - Demo Configuring a Project with Multiple Source Files

- Configuring a project with multiple source files
- Add the  reference for including the file top

```javascript
/// <reference path="person.ts" />
```

- And change the **tsconfig.json** file also


```json
{
    "extends": "../tsconfig.base.json",
    "compilerOptions": {
        "removeComments": true,
        "outFile": "../js/app.js"
    },
    "files": [
        "./app.ts"
    ]
}
```
