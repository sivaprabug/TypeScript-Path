# Typing Variables and Functions - The Any Type and Primitives


### Any Type
- Represents any JavaScript value in **any** type
- **any** or not mentioned anythig is same datatype only
```javascript
var data: any;  //No static type checking on “any"
var info;
```

### Primitive Types

- If not mentioned means according to that value the data type is changed

```javascript
var age: number = 2;
var score: number = 98.25; // Number Type
var rating = 98.25; // Automatically taken as number


var hasData: boolean = true; // Boolean Type
var isReady = true; // Automatically taken as Boolean

var firstName: string ='John';
var lastName = 'Papa' // Automatically taken as String
```

### Arrays and Indexers
- Defined a string array
```javascript
var names:string[] = ['John','Dan','Aaron','Fritz'];
var firstPerson:string;
firstPerson = names[0]; => indexer
```


#### NULL
-  Any type we can assign as ***null***
```javascript
var num: number = null;
var str: string = null;
var isHappy: boolean = null;
var customer: {} = null;
var age:number;
```
- Null type is a subtype of all primitives (***except void and undefined***)
- ***void*** we can get at arrow functions

#### UNDEFINED
- Initialized but didnt set anything
```javascript
var customer =undefined;
var quantity:number;
var company = undefined;
```
***undefined type is a subtype of all types***