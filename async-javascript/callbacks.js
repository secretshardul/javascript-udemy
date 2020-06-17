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


/**Without callback
 * As JS is non-blocking, getPosts(1 second time) will render results
 * before setPost(2 second time) can push value
 */

/*
function setPost(post){
    setTimeout(() => {
        posts.push(post);
    }, 2000); //add after 2000ms
}

setPost({title:'post 3', body: 'post 3 body'});
getPosts();
 */

function setPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        //callback must be in the same scope as delayed action
        callback(); //executed after push is complete
    }, 2000); //add after 2000ms

}

setPost({title:'post 3', body: 'post 3 body'}, getPosts);