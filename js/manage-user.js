if (localStorage.getItem('role') == 'admin') {
    document.getElementById('admin-side').style.display = 'none';
}
if(!localStorage.getItem('role')){
    window.location.href = "./../login.html"
}
document.getElementById('logout').addEventListener('click', function(){
    localStorage.removeItem('role');
    window.location.href = "./../login.html";
})
