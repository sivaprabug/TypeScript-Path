# Typing Variables and Functions - Compile Time or Run Time

### JavaScript’s Dynamic Types
```javascript
var person; //Could be any type
person = 'John Papa';
person.substring(1,4);
person = 1;
person.substring(1,4); // Uncaught TypeError: Object 1 has no method 'substring'
```