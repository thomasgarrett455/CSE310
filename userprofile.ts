const displayUsername = document.getElementById('username-display') as HTMLElement
const currentUser = localStorage.getItem('currentUser')

const displayPass = document.getElementById('password-display') as HTMLElement
const toggleBtn = document.getElementById('toggle-password');
const currentPass = localStorage.getItem('currentPass')

let isPasswordVisible = false;

if (displayUsername && currentUser) {
    displayUsername.textContent = currentUser;
}

if (displayPass && toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        isPasswordVisible = !isPasswordVisible;

        if (isPasswordVisible) {
            displayPass.textContent = currentPass;
            toggleBtn.textContent = "Hide Password";
        }
        else {
            displayPass.textContent = "*******"
            toggleBtn.textContent = "Show Password";
        }
    });

}