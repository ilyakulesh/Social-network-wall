export class darkTheme {
  toggleTheme() {
    let page = document.querySelector(".page");
    const themeButton = document.getElementById("chk");
    themeButton.onclick = function () {
      page.classList.toggle("light-theme");
      page.classList.toggle("dark-theme");
    };
  }
}
