# Typing Variables and Functions - Ambient Declarations and Type Definition Files

### TypeScript

lib.d.ts is referenced by default and contains references for the DOM and JavaScript


```javascript
declare var document;
document.title = "Hello";
```

### JavaScript

Ambient Declarations do not appear anywhere in the JavaScript

```javascript
document.title = "Hello";
```


Refer here [https://typescript.codeplex.com/](https://typescript.codeplex.com/)

 - Add the  ***knockout.d.ts***

```javascript
 /// <reference path="../typings/knockout.d.ts" />
```