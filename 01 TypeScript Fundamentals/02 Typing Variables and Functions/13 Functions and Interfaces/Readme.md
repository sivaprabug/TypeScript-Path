# Typing Variables and Functions - Functions and Interfaces

- Interface just for using the types purpose

```javascript
    interface SquaringFunction {
        (x: number): number;
    }
```

- **w?** means is not required

```javascript
    interface Rectangle {
        h: number;
        w?: number;
    }
```