# 06 Installing TypeScript and Configuring a Project - Demo Configuration Inheritance and Glob Support in tsconfig.json

- One configuration file inherit from another one
- Make as base file
	- Rename as tsconfig.base.json
- Inside app create tsconfig.json
- Use **extend** keyword to inherit the main configuration file.

- tsconfig file

```json
{
    "extends": "../tsconfig.base.json",
    "compilerOptions": {
        "removeComments": true
    },
    "include": [
        "./**/*.ts"
    ]
}
```