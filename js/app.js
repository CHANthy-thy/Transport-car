if(localStorage.getItem('role') == "user"){
    document.getElementById('admin-side').style.display = "none";
    document.getElementById('adminToggle').style.display = "none";
}
document.getElementById('logout').addEventListener('click', function(){
    localStorage.removeItem('role');
    window.location.href = "./../index.html";
})