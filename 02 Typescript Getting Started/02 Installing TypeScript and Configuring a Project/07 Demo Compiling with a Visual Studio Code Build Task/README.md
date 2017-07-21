# 07 Installing TypeScript and Configuring a Project - Demo Compiling with a Visual Studio Code Build Task

- Compiling with Visual Studio Code build task
- Need to add task.json
- Sample task.json


```json
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "0.1.0",
    "command": "tsc",
    "isShellCommand": true,
    "args": [
        "--project",
        "./app"
    ],
    "showOutput": "always",
    "problemMatcher": "$tsc"
}

```