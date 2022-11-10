// Fake logout/login

function logoutFn() {
    const user = document.getElementById("user");
    const button = document.getElementById("button");
    const logout = "Log in";
    const login = "Logout";

    user.innerHTML = " ";
    button.innerHTML = logout;

    if (button.innerHTML === logout) {
        button.addEventListener("click", () => {
            user.innerHTML = "user123";
            button.innerHTML = login;
        })
    };
};