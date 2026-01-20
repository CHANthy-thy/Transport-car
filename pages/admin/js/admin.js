if(localStorage.getItem('role') == 'admin'){
    window.location.href = "./../home.html"
}
if(!localStorage.getItem('role')){
    window.location.href = "./../login.html"
}
document.getElementById('logout').addEventListener('click', function(){
    localStorage.removeItem('role');
    window.location.href = "./../../login.html";
})
