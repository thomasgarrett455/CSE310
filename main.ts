const usernameInput = document.getElementById('username') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;

const loginBtn = document.getElementById('login') as HTMLButtonElement;
const registerBtn = document.getElementById('register') as HTMLButtonElement;

type User = {
    username: string;
    password: string;
}

const handleRegister = (username: string, password: string) => {
    const rawData = localStorage.getItem('users');
    const users: User[] = rawData ? JSON.parse(rawData) : [];

    const userExists = users.some(user => user.username === username)
    
    if (userExists) {
        alert("That username is already taken");
        return;
    }

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
        alert("Please fill out both fields");
    }
});

const handleLogin = (username: string, password: string) => {
    const rawData = localStorage.getItem('users');
    const users: User[] = rawData ? JSON.parse(rawData) : [];

    const user = users.find(user => user.username === username)

        if (!user || user.password != password) {
        alert("Invalid username or password.");
        return;
    }
        alert("Login Successful.");

        localStorage.setItem('currentUser', username);
        localStorage.setItem('currentPass', password);

        window.location.href = 'profile.html';
}

loginBtn.addEventListener('click', () => {
    const user = usernameInput.value.trim();
    const pass = passwordInput.value.trim();

    if (user && pass) {
        handleLogin(user, pass);
    }
});




