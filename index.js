import "./index.css";
import { App } from "./src/modules/app";

const app = new App();
app.run();

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