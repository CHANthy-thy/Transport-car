const users = [
    { id: 1, email: 'sokom@gmail.com', password: '12345', role: 'admin' },
    { id: 2, email: 'gta@gmail.com', password: '12345', role: 'user' },
    { id: 3, email: 'tola@gmail.com', password: '12345', role: 'user' },
    { id: 4, email: 'sreyvik@gmail.com', password: '12345', role: 'user' },
    { id: 5, email: 'reourn@gmail.com', password: '12345', role: 'user' },
    { id: 6, email: 'chanthy@gmail.com', password: '12345', role: 'user' },
];
// isLogin
if(localStorage.getItem('role')){
    window.location.href = "index.html";
}
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    for(let user of users){
        if(user.email == email.value && user.password == password.value){
            localStorage.setItem('role', user.role)
            window.location.href = "index.html";
        }
    }
});