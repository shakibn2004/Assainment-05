// Login page functionality 
document.getElementById('sign-in-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === '') {

        alert('Username could not be emty');
        return
        
    } else if(username !== 'admin') {

        alert('username not matched!')
        return

    } else if(password < 8) {

        alert('password should be at least 8 charecter!')
        return

    } else if(password !== 'admin123') {

        alert('password not matched')
        return

    }
    window.location.assign('./home.html');
});