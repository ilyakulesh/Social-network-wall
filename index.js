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
}, 500)