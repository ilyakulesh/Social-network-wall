export class navBar {

createNavBar() {
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
    return navBar;
}
}