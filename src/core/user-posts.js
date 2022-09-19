const posts_URL = 'https://jsonplaceholder.typicode.com/users/1/posts';
const comments_URL = 'https://jsonplaceholder.typicode.com/posts/1/comments';

export class userPosts {
    constructor() {
        
    }
    getUserPosts() {
        const result = fetch(posts_URL);
        result
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка получения постов');
                }
                return response.json();
            })
            .then((posts) => {
                console.log('posts', posts);
                posts.forEach((post) => {
                    // console.log('post', post.title);
                })
            })
    }
}