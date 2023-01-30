function setPW(){
    document.getElementById("psw").setAttribute("type", "text");
}

function setTex(){
    document.getElementById("psw").setAttribute("type", "password");
}

document.getElementById("ic-psw").onclick = function() {
    pa = document.getElementById("psw").type;

    if (pa == "password"){
        setPW();
    } else{
        setTex();
    }
}