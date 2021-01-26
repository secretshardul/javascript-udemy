# Types of operations
1. Callbacks: classic JS
2. promises: ES6
    - ```resolve``` and ```reject``` conditions can be handled with ```then()``` and ```catch()```.
    - Used by fetch() and libraries like Axios
    - ```Promise.all()```: used to evaluate multiple promises together. It makes other promises wait until longest promise executes.
3. async/await: ES7
    - **Need promises**
    - More elegant form to deal with promises. It does away with ```then()``` and ```catch()```. Code resembles that from synchronous programming.
    - ```async``` added to function which deals with promises.
    - ```await``` added to value which accepts a promise. Other statements await until code with ```await``` executes.
```js
async function init() {
  await setPost({ title: 'post 3', body: 'post 3 body' }); //the slow function
  getPosts();
}

init();
```