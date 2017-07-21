# 04 Installing TypeScript and Configuring a Project- Using Project Files

- Simple JSON text file named tsconfig.json
- Stores compiler options used with the project
- Specifies file to be included or excluded in compilation.
- Supports configuration inheritance.


### Adding compiler options to tsconfig.json

```json
{
    "compilerOptions": {
        "target": "es5",
        "noUnusedLocals": true,
        "outFile": "output.js"
    },
    "files": {
        "app.js"
    }
}
```