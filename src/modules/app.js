import { createUsers } from "./create-users";
import { navBar } from "./nav-bar";

export class App {
    #navBar
    #createUsers

    constructor() {
        this.#navBar = new navBar();
        this.#createUsers = new createUsers();
    }

    run() {
        const navBarHTML = this.#navBar.createNavBar();
        document.body.append(navBarHTML);

        this.#createUsers.getAllUsers();

        this.#navBar.searchUser();
    }
};