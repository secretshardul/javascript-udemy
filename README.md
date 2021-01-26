# Strict mode
```
'use strict'
```
1. Can't use undeclared variables
```js
x = 5 // Runs otherwise
```

2. Can't use `eval()`: It's a function to run arbitary JS. `eval` is a security issue.
```js
eval('const x = 5')
console.log(x)
```

3. `this` returns undefined in strict mode. It returns the global window object otherwise.

4. Can't delete variables and functions
```js
const x = 5
delete 5
```