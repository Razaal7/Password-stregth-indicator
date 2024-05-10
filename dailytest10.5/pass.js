const passwordInput = document.getElementById('password');
const strengthIndicator = document.getElementById('password-strength');

passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);

    
    strengthIndicator.className = '';
    if (strength < 3) {
        strengthIndicator.classList.add('strength-weak');
    } else if (strength < 6) {
        strengthIndicator.classList.add('strength-medium');
    } else {
        strengthIndicator.classList.add('strength-strong');
    }
});

function calculatePasswordStrength(password) {
    let strength = 0;

    
    if (password.length >= 8) {
        strength += 1;
    }
    
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        strength += 1;
    }
    
    if (/\d/.test(password)) {
        strength += 1;
    }
    
    if (/[^a-zA-Z0-9]/.test(password)) {
        strength += 1;
    }
    return strength;
}
