import "./index.css";
import { App } from "./src/modules/app";

const app = new App();
app.run();

setTimeout(() => {
    const buttons = document.querySelectorAll('.btn');
    console.log('buttons', buttons)
    const modalOverlay = document.querySelector('.modal-overlay ');
    const modals = document.querySelectorAll('.modal');
    
    buttons.forEach((el) => {
        el.addEventListener('click', (e) => {
            console.log('idPredka', el.closest('div').getAttribute('id'));
            let path = e.currentTarget.getAttribute('data-path');
    
            modals.forEach((el) => {
                el.classList.remove('modal--visible');
            });
    
            document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
            modalOverlay.classList.add('modal-overlay--visible');
        });
    });
    
    modalOverlay.addEventListener('click', (e) => {
        console.log(e.target);
    
        if (e.target == modalOverlay) {
            modalOverlay.classList.remove('modal-overlay--visible');
            modals.forEach((el) => {
                el.classList.remove('modal--visible');
            });
        }
    });

    const modalWindow1 = document.querySelector('.modal--1');
    const userId1 = '1';
    const posts_URL = `https://jsonplaceholder.typicode.com/users/${userId1}/posts`;  

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
                modalWindow1.append(userPost);
            })
        })

        const modalWindow2 = document.querySelector('.modal--2');
        const userId2 = '1';
        const photos_URL = `https://jsonplaceholder.typicode.com/albums/${userId2}/photos`;
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
}, 500)