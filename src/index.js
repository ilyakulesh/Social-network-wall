import "../index.css";

const users_URL = 'https://jsonplaceholder.typicode.com/users';
const avatars_URL = 'https://avatars.dicebear.com/api/avataaars/'

const dataContainer = document.querySelector('#data-container');

const navBar = document.createElement('div');
navBar.className = 'nav-bar';

const searchForm = document.createElement('form');
searchForm.className = 'search-form';

const searchInput = document.createElement('input');
searchInput.className = 'search-input';
searchInput.setAttribute('type','text');
searchInput.setAttribute('placeholder', 'Find user...');

const searchButton = document.createElement('button');
searchButton.setAttribute('type','submit');

searchForm.append(searchInput, searchButton);
navBar.append(searchForm);
document.body.append(navBar);

// Функция создания юзеров
const createUsers = (name, email, website) => {
    const userBlock = document.createElement('div');
    userBlock.className = 'user-block';

    const userPicture = document.createElement('img');
    userPicture.className = 'user-picture';
    userPicture.src = `${avatars_URL}${email}.svg`;
    
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
                const usersHTML = createUsers(user.name, user.email, user.website);
                dataContainer.append(usersHTML);
            })
        })
        .catch((error) => {
            console.log('error', error);
        })
        .finally(() => {
            toggleLoader();
        })
};

getAllUsers();

// Моментальный поиск юзеров
document.querySelector('.search-input').oninput = function() {
    let input = this.value.trim().toUpperCase();
    const userNames = document.querySelectorAll('.user-name');
    if (input != '') {
        userNames.forEach((name) => {
            if (name.innerText.toUpperCase().search(input) == -1) {
                name.closest('div').style.display = 'none';
            } else {
                name.closest('div').style.display = '';
            }
        })
    } else {
        userNames.forEach((name) => {
            name.closest('div').style.display = '';
        });
    }
};