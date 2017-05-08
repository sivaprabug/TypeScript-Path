	# Typing Variables and Functions - Objects

- We also have object types in primitives
- Functions, class, module, interface, and literal types


#### May contain

- Properties
	- public or private
	- required or optional

- Call signatures
- Construct signatures
- Index signatures

- Functions are also objects

```javascript
var squareIt = function (
        rect: { h: number; w?: number; }) {
        if (rect.w === undefined) {
            rect.h * rect.h;
        }
        return rect.h * rect.w;
    }

```
**? is the optional parameter**