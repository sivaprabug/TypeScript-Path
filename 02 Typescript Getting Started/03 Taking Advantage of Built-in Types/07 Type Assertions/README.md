# 07 Taking Advantage of Built-in Types - Type Assertions

```javascript
    let value: any = 5.5678;
    console.log(value)
    let fixedString: string = (<number>value).toFixed(2);
    console.log(fixedString); // 5.00

    let fixedStrings: string = (value as number).toFixed(3);
    console.log(fixedStrings); // 5.0000
```