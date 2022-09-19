import { createUsers } from "./create-users";
import { navBar } from "./nav-bar";
import { userAlbums } from "../core/user-albums";
import { userPosts } from "../core/user-posts";

export class App {
    #navBar
    #createUsers
    #userAlbums
    #userPosts

    constructor() {
        this.#userAlbums = new userAlbums();
        this.#navBar = new navBar();
        this.#createUsers = new createUsers();
        this.#userPosts = new userPosts();
    }

    run() {
        const navBarHTML = this.#navBar.createNavBar();
        document.body.append(navBarHTML);

        this.#navBar.searchUser();

        this.#createUsers.getAllUsers();

        // this.#userAlbums.getUserAlbums();
        this.#userAlbums.getUserPhotos();

        this.#userPosts.getUserPosts();
        // this.#userPosts.getUserComments();
    }
};