var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var loginBtn = document.getElementById('login');
var registerBtn = document.getElementById('register');
var handleRegister = function (username, password) {
    var rawData = localStorage.getItem('users');
    var users = rawData ? JSON.parse(rawData) : [];
    users.push({ username: username, password: password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("User registered successfully!");
};
registerBtn.addEventListener('click', function () {
    var user = usernameInput.value.trim();
    var pass = passwordInput.value.trim();
    if (user && pass) {
        handleRegister(user, pass);
    }
    else {
        alert("Please fill out both fields");
    }
});
