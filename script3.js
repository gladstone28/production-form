document.addEventListener('DOMContentLoaded', function() {
    var correctPassword = 'watson'; // Change this to your actual password
    var userPassword = prompt('Please enter the password to access the form:');

    if (userPassword === correctPassword) {
        document.getElementById('protectedForm').style.display = 'block';
    } else {
        alert('Incorrect password. You do not have access to this form.');
        // Optionally redirect the user or hide the entire body
        // document.body.innerHTML = 'Access Denied';
        // or
        // window.location = 'access-denied.html'; // Redirect to another page
    }
});