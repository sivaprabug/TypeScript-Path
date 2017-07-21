# 05 Installing TypeScript and Configuring a Project - Demo Configuring Compiler Options in tsconfig.json

- Configure compile options in tsconfig.json
- tsc --version (For finding versions)
- tsc --help
- tsc -h

### Creating a tsconfig.json
** tsc --init **

```json
{
  "compilerOptions": {
    "target": "es5",
    "noImplicitAny": false,
    "sourceMap": true,
    "watch": true,
    "outDir": "js"
  },
  "files": [
    "app/app.ts"
  ]
}
```

- app.js.map is source map
- copmile tsc