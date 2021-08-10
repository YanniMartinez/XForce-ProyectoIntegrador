let logout = document.querySelector("#logout");
logout.addEventListener('click', event => {
    localStorage.removeItem("token");
});