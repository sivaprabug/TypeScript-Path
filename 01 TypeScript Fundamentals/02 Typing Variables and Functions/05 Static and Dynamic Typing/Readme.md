# Typing Variables and Functions - Static and Dynamic Typing

### Dynamic and Static

####TypeScript
	- Static typing (optional)
	- Type safety is a compile-time feature

####JavaScript
 - Dynamic typing
 - Type safety happens at run-time debugging


### JavaScript’s Dynamic Types
```javascript
var person; //Could be any type
person = 'John Papa';
person.substring(1,4);
person = 1;
person.substring(1,4); // Uncaught TypeError: Object 1 has no method 'substring'
```


##### Ambient Declarations

#### TypeScript
lib.d.ts is referenced by default and contains references for the DOM and JavaScript
```javascript
declare var document;
document.title = "Hello";
```

#### JavaScript
Ambient Declarations do not appear anywhere in the JavaScript
```javascript
document.title = "Hello";
```


### Type Definition Files (aka Declaration Source Files)

####TypeScript
Helps provide types for jquery
```javascript
///<referencepath="jquery.d.ts"/>
declare var $;
var data = "Hello John";
$("div").text(data);
```

####JavaScript

Ambient Declarations do not appear anywhere in the JavaScript
```javascript
var data = "Hello John";
$("div").text(data);
```

