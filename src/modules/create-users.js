import { toggleLoader } from "../core/index"; 

const users_URL = 'https://jsonplaceholder.typicode.com/users';
const dataContainer = document.querySelector('#data-container');

export class createUsers {
	constructor () {
    this.avatars_URL = 'https://avatars.dicebear.com/api/avataaars/'
	}

    #createUserBlock(name, email, id) {
	const userBlock = document.createElement('div');
	userBlock.className = 'user-block';
    userBlock.id = id;
	
    const userPicture = document.createElement('img');
    userPicture.className = 'user-picture';
    userPicture.src = `${this.avatars_URL}${email}.svg`;
    
    const userName = document.createElement('p');
    userName.className = 'user-name';
    userName.textContent = name;

    const userEmail = document.createElement('p');
    userEmail.className = 'user-email';
    userEmail.textContent = email;

    const userPosts = document.createElement('button');
    userPosts.className = 'btn'
    userPosts.setAttribute('data-path', 'form-popup');
    userPosts.href = '#';
    userPosts.textContent = 'See user posts';

    const userPhotos = document.createElement('button');
    userPhotos.className = 'btn'
    userPhotos.setAttribute('data-path', 'form-popup');
    userPhotos.href = '#';
    userPhotos.textContent = 'See user photos';

    const modals = document.createElement('div');
    modals.className = 'modals';

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';

    const modalWindow = document.createElement('div');
    modalWindow.className = 'modal modal--1';
    modalWindow.setAttribute('data-target', 'form-popup');
    modalWindow.textContent = 'Модальное окно'


    modalOverlay.append(modalWindow);
    modals.append(modalOverlay);

    userBlock.append(userPicture, userName, userEmail, userPosts, userPhotos, modals);

    return userBlock;
    }

    getAllUsers() {
        const result = fetch(users_URL);
        toggleLoader();
        result
            .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка получения пользователей');
            }
            return response.json();
            })
            .then((users) => {
                users.forEach((user) => {
                    const result = this.#createUserBlock(user.name, user.email, user.id);
                    dataContainer.append(result);
                })
            })
            .catch((error) => {
                console.log('error', error);
            })
            .finally(() => {
                toggleLoader();
            })
            
    }
};