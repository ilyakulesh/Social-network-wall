import "./index.css";
import { App } from "./src/modules/app";

const app = new App();
app.run();

setTimeout(() => {
const buttons = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const buttonModal1 = document.querySelector('.btn-modal1');
const buttonModal2 = document.querySelector('.btn-modal2');
const modalWindow1 = document.querySelector('.modal--1');
const modalWindow2 = document.querySelector('.modal--2');

buttons.forEach((el) => {
    el.addEventListener('click', (e) => {

        let userId = el.closest('div').getAttribute('id')

        const posts_URL = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;  
        const resultWindow1 = fetch(posts_URL);
        resultWindow1
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка получения постов');
                }
                return response.json();
            })
            .then((posts) => {
                posts.forEach((post) => {
                    const userPost = document.createElement('div');
                    userPost.className = 'user-posts';
                    userPost.textContent = post.body;
    
                    const titlePost = document.createElement('div');
                    titlePost.className = 'title-post';
                    titlePost.textContent = post.title
                    userPost.prepend(titlePost);
    
                    modalWindow1.append(userPost);
                })
            })

            const photos_URL = `https://jsonplaceholder.typicode.com/albums/${userId}/photos`;
            const resultWindow2 = fetch(photos_URL);
            resultWindow2
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Ошибка получения фотографий');
                    }
                    return response.json();
                })
                .then((photos) => {
                    photos.forEach((photo) => {
                        const userPhoto = document.createElement('img');
                        userPhoto.className = 'user-photo';
                        userPhoto.src = photo.thumbnailUrl;
                        modalWindow2.append(userPhoto);
                    })
                })
                
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
        document.body.style.overflow = 'hidden';
    });
});

modalOverlay.addEventListener('click', (e) => {

    if (e.target == modalOverlay || e.target == buttonModal1 || e.target == buttonModal2) {
        modalOverlay.classList.remove('modal-overlay--visible');

        const userPost = document.querySelectorAll('.user-posts');
        userPost.forEach((post) => {
            post.remove();
        })

        const userPhoto = document.querySelectorAll('.user-photo');
        userPhoto.forEach((photo) => {
            photo.remove();
        })

        modals.forEach((el) => {
            el.classList.remove('modal--visible');
            document.body.style.overflow = 'visible';
        });
    }
});
}, 500)