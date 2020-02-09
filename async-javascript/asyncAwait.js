const posts = [
  { title: 'post 1', body: 'post 1 body' },
  { title: 'post 2', body: 'post 2 body' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000); //display after 1000ms
}

function setPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 2000);
  });
}

async function init() {
//   await setPost({ title: 'post 3', body: 'post 3 body' });
//   getPosts();

    //async/await with fetch
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonResp = await resp.json();
    console.log(jsonResp);
}

init();



