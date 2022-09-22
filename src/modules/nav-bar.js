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
    searchButton.setAttribute('disabled', '');

    searchForm.append(searchInput, searchButton);
    navBar.append(searchForm);

    return navBar;
}

createNoFound() {
    const dataContainer = document.querySelector('#data-container');

    const noFound = document.createElement('div');
    noFound.className = 'no-found';
    noFound.textContent = 'no-found';
    noFound.style.display = 'none';

    dataContainer.append(noFound);
}

searchUser() {
    document.querySelector('.search-input').oninput = function() {
        let input = this.value.trim().toUpperCase();
        const userNames = document.querySelectorAll('.user-name');
        if (input != '') {
            userNames.forEach((name) => {
                // console.log('name', name)
                // console.log('name.closest', name.closest('div'));
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

        const userBlock = document.querySelectorAll('.user-block');
        const userBlockArray = Array.from(userBlock);

        const userFilter = userBlockArray.filter(elem => elem.style.display == 'none');

        const noFound = document.querySelector('.no-found');
            if (userFilter.length == userBlockArray.length) {
                noFound.style.display = '';
                noFound.textContent = `No results found for "${this.value}"`;
            } else {
                noFound.style.display = 'none';
            }
    };
}
}