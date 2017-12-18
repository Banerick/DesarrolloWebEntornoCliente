function storeCookie(){
    if (document.cookie == undefined) {
        var usuario = document.getElementById('usuario').value;
        console.log(usuario);
        var date = new Date();
        date.setMinutes(date.getMinutes() + 5);
        var color = document.cookie;
        document.cookie = "username=" + usuario + "; expires =" + date;
        console.log(document.cookie);
    }
    else {
        alert('USUARIO INICIADO');
    }
}
document.getElementById('boton').addEventListener("click",storeCookie);

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


getCookie('username');