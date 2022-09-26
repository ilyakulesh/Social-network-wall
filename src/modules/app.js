import { createUsers } from "./create-users";
import { navBar } from "./nav-bar";
import { darkTheme } from "../core/dark-theme";

export class App {
  #navBar;
  #createUsers;
  #darkTheme;

  constructor() {
    this.#navBar = new navBar();
    this.#createUsers = new createUsers();
    this.#darkTheme = new darkTheme();
  }

  run() {
    const navBarHTML = this.#navBar.createNavBar();
    document.body.append(navBarHTML);

    this.#navBar.searchUser();
    this.#navBar.createNoFound();

    this.#createUsers.getAllUsers();

    this.#darkTheme.toggleTheme();
  }
}
