const usernameInput = document.getElementById('username') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;

const loginBtn = document.getElementById('login') as HTMLButtonElement;
const registerBtn = document.getElementById('register') as HTMLButtonElement;

const handleRegister = (username: string, password: string) => {
    const rawData = localStorage.getItem('users');
    const users = rawData ? JSON.parse(rawData) : [];

    users.push({username, password});
    localStorage.setItem('users', JSON.stringify(users));

    alert("User registered successfully!");
}

registerBtn.addEventListener('click', () => {
    const user = usernameInput.value.trim();
    const pass = passwordInput.value.trim();

    if (user && pass) {
        handleRegister(user, pass);
    }
    else {
        alert("Please fill out both fields")
    }
});


