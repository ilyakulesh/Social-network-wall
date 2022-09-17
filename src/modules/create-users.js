import { toggleLoader } from "../core/index"; 

const users_URL = 'https://jsonplaceholder.typicode.com/users';
const dataContainer = document.querySelector('#data-container');

export class createUsers {
	constructor () {
    this.avatars_URL = 'https://avatars.dicebear.com/api/avataaars/'
	}

    #createUserBlock(name, email, website) {
	const userBlock = document.createElement('div');
	userBlock.className = 'user-block';
	
    const userPicture = document.createElement('img');
    userPicture.className = 'user-picture';
    userPicture.src = `${this.avatars_URL}${email}.svg`;
    
    const userName = document.createElement('p');
    userName.className = 'user-name';
    userName.textContent = name;

    const userEmail = document.createElement('p');
    userEmail.className = 'user-email';
    userEmail.textContent = email;

    const userWebsite = document.createElement('a');
    userWebsite.setAttribute('target', '_blank');
    userWebsite.href = `https://${website}`;
    userWebsite.textContent = website;

    userBlock.append(userPicture, userName, userEmail, userWebsite);

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
                    const result = this.#createUserBlock(user.name, user.email, user.website);
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