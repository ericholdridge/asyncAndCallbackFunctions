// Create an array of posts
const posts = [
    {
        title: 'Post One', body: 'This is post one',
    },
    {
        title: 'Post Two', body: 'This is post two'
    }
];

// Display the posts after 1 second using setTimeout()
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// Create a post
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);