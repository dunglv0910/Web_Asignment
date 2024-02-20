
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function () {
        if (this.window.scrollY>317.6000061035156) {
            this.document.getElementById('menu').classList.remove("menuAm");
            this.document.getElementById('menu').classList.add("sticky-menu");
        } else if(this.window.scrollY>243.1999969482422){
            this.document.getElementById('menu').classList.add("menuAm");
            
        } else{
            this.document.getElementById('menu').classList.remove('sticky-menu');
        }
    })
})

function checkLogin() {
    var user = localStorage.getItem('user');
    var login = JSON.parse(user);
    if(login.tf == true){
        document.getElementById('select').style = 'display: none';
        document.getElementById('selectSub').style = 'display: block';
        document.getElementById('main-section1').style = 'height: 600px; top:100px';
    }else{
        alert("Vui lòng đăng nhập")
    }
}
