export class navBar {
  createNavBar() {
    const navBar = document.createElement("div");
    navBar.className = "nav-bar";

    const searchForm = document.createElement("form");
    searchForm.className = "search-form";

    const searchInput = document.createElement("input");
    searchInput.className = "search-input";
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Find user...");

    const searchButton = document.createElement("button");
    searchButton.className = "search-button";
    searchButton.setAttribute("disabled", "");

    const toggleButton = document.createElement("div");
    toggleButton.className = "toggle-button";

    const inputToggle = document.createElement("input");
    inputToggle.className = "checkbox";
    inputToggle.setAttribute("type", "checkbox");
    inputToggle.id = "chk";

    const labelToggle = document.createElement("label");
    labelToggle.className = "label";
    labelToggle.setAttribute("for", "chk");

    const toggleMoon = document.createElement("i");
    toggleMoon.className = "fas fa-moon";

    const toggleSun = document.createElement("i");
    toggleSun.className = "fas fa-sun";

    const toggleBall = document.createElement("div");
    toggleBall.className = "ball";

    labelToggle.append(toggleMoon, toggleSun, toggleBall);

    toggleButton.append(inputToggle, labelToggle);

    searchForm.append(searchInput, searchButton);
    navBar.append(searchForm, toggleButton);

    return navBar;
  }

  createNoFound() {
    const dataContainer = document.querySelector("#data-container");

    const noFound = document.createElement("div");
    noFound.className = "no-found";
    noFound.textContent = "no-found";
    noFound.style.display = "none";

    dataContainer.append(noFound);
  }

  searchUser() {
    document.querySelector(".search-input").oninput = function () {
      let input = this.value.trim().toUpperCase();
      const userNames = document.querySelectorAll(".user-name");
      if (input != "") {
        userNames.forEach((name) => {
          if (name.innerText.toUpperCase().search(input) == -1) {
            name.closest("div").style.display = "none";
          } else {
            name.closest("div").style.display = "";
          }
        });
      } else {
        userNames.forEach((name) => {
          name.closest("div").style.display = "";
        });
      }

      const userBlock = document.querySelectorAll(".user-block");
      const userBlockArray = Array.from(userBlock);

      const userFilter = userBlockArray.filter(
        (elem) => elem.style.display == "none"
      );

      const noFound = document.querySelector(".no-found");
      if (userFilter.length == userBlockArray.length) {
        noFound.style.display = "";
        noFound.textContent = `No results found for "${this.value}"`;
      } else {
        noFound.style.display = "none";
      }
    };
  }
}
