const users_URL = 'https://jsonplaceholder.typicode.com/users';

const dataContainer = document.querySelector('#data-container');

// Функция создания юзеров
const createUsers = (name, email, website) => {
    const userBlock = document.createElement('div');
    userBlock.className = 'user-block';

    const userPicture = document.createElement('img');
    userPicture.className = 'user-picture';
    userPicture.src = './img/1.jpg';
    
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
};

// Функция создания loading
const toggleLoader = () => {
    const toggleHTML = document.querySelector('#loader');
    const isHidden = toggleHTML.hasAttribute('hidden');
    if (isHidden) {
        toggleHTML.removeAttribute('hidden');
    } else {
        toggleHTML.setAttribute('hidden', '');
    }
};

// Получаем юзеров по URL адресу
const getAllUsers = () => {
    const result = fetch(users_URL);
    console.log(result);
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
                console.log('username',user.name);
                const usersHTML = createUsers(user.name, user.email, user.website);
                dataContainer.append(usersHTML);
            })
            console.log('users', users);
        })
        .catch((error) => {
            console.log('error', error);
        })
        .finally(() => {
            toggleLoader();
        })
};

getAllUsers();
