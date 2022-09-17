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

searchUser() {
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
}
}