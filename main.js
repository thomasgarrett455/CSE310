"use strict";
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login');
const registerBtn = document.getElementById('register');
const handleRegister = (username, password) => {
    const rawData = localStorage.getItem('users');
    const users = rawData ? JSON.parse(rawData) : [];
    const userExists = users.some(user => user.username === username);
    if (userExists) {
        alert("That username is already taken");
        return;
    }
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("User registered successfully!");
};
registerBtn.addEventListener('click', () => {
    const user = usernameInput.value.trim();
    const pass = passwordInput.value.trim();
    if (user && pass) {
        handleRegister(user, pass);
    }
    else {
        alert("Please fill out both fields");
    }
});
const handleLogin = (username, password) => {
    const rawData = localStorage.getItem('users');
    const users = rawData ? JSON.parse(rawData) : [];
    const user = users.find(user => user.username === username);
    if (!user || user.password != password) {
        alert("Invalid username or password.");
        return;
    }
    alert("Login Successful.");
    localStorage.setItem('currentUser', username);
    localStorage.setItem('currentPass', password);
    window.location.href = 'profile.html';
};
loginBtn.addEventListener('click', () => {
    const user = usernameInput.value.trim();
    const pass = passwordInput.value.trim();
    if (user && pass) {
        handleLogin(user, pass);
    }
});
