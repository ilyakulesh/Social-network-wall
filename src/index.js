import "../index.css";
import { createUsers } from "./create-users";
import { navBar } from "./nav-bar";

const navBarResult = new navBar;
document.body.append(navBarResult.createNavBar());

const resultUser = new createUsers();
resultUser.getAllUsers();

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