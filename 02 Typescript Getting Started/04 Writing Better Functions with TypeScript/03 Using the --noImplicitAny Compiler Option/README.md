# 03 Writing Better Functions with TypeScript - Using the --noImplicitAny Compiler Option

```json
"noImplicitAny": true,
/* Raise error on expressions and declarations with an implied 'any' type. */
```

- false means not return any errors.
- true means find the error.

```log
app/app.ts(1,19): error TS7006: Parameter 'value1' implicitly has an 'any' type.
app/app.ts(1,27): error TS7006: Parameter 'value2' implicitly has an 'any' type.
```