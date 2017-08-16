let s1 = Symbol();
console.log('s1', s1);
let s2 = Symbol("mySymbol");
console.log('s2', s2);



let s1 = Symbol("mySymbol Description");
console.log('s1', s1 = s1);
let s2 = Symbol("mySymbol Description");
console.log('s2', s2);
console.log(s1 === s2); // false, symbols are unique
console.log(s1 === s1);


/*Here is the list of some built-in symbols:
1. Symbol.hasInstance - Used for determining whether an object is one of the constructor’s instance.
2. Symbol.match - Used for matching the regular expression against a string.
3. Symbol.iterator - Returns the default iterator for an object and called by the for-of loop.
4. Symbol.search - Returns the index number within a string that matches the regular expression.
5. Symbol.split - Splits a string at the indices that match the regular expression.*/