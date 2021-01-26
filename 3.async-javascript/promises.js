const posts=[
    {title:'post 1', body: 'post 1 body'},
    {title:'post 2', body: 'post 2 body'},
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000); //display after 1000ms
}

function setPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            //set error as true for reject
            const error = true; //evaluate this when using promises
            // resolve() //resolve can be directly returned without testing any error condition


            if (!error){
                resolve()
            }
            else{
                reject('Error: something went wrong'); //must be caught
            }
        }, 2000);
    });
}

// setPost({title:'post 3', body: 'post 3 body'})
//     .then(getPosts)
//     .catch(err => console.log(err));

const promise1 = Promise.resolve('Hello world'); //no reject option
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'goodbye');
});

//fetch needs then() two times, once for parsing to JSON and second time for actual operation
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json());

//Promise.all() waits till longest promise executes
Promise.all([promise1, promise2, promise3, promise4])
    .then(values => console.log(values));