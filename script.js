function Submit(){
    var a = parseInt(document.getElementById("fogalomismeret").value);
    var b = parseInt(document.getElementById("fogalomdefinialas").value);
    var c = parseInt(document.getElementById("tartalom").value);
    var d = parseInt(document.getElementById("elvek").value);
    var e = parseInt(document.getElementById("osszefugg").value);
    var f = parseInt(document.getElementById("idobeosztas").value);
    var g = parseInt(document.getElementById("felepitettseg").value);
    var h = parseInt(document.getElementById("eloadas").value);
    var j = parseInt(document.getElementById("szaknyelv").value);
    var osszeg = a + b + c + d + e + f + g + h + j;
    var szazalek = osszeg/30*100;
    document.getElementById("eredmeny").innerHTML = "Eredmény: " + osszeg +" pont    " + szazalek + "%";
    if (szazalek<25){
        document.getElementById("erdemjegy").innerHTML = "1 Elégtelen";
        document.getElementById("erdemjegy").style.color = "red";
    }
    else if (szazalek < 40){
        document.getElementById("erdemjegy").innerHTML = "2 Elégséges";
        document.getElementById("erdemjegy").style.color = "orange";
    }
    else if (szazalek < 60){
        document.getElementById("erdemjegy").innerHTML = "3 Közepes";
        document.getElementById("erdemjegy").style.color = "yellow";
    }
    else if (szazalek < 80){
        document.getElementById("erdemjegy").innerHTML = "4 Jó";
        document.getElementById("erdemjegy").style.color = "lightblue";
    }
    else{
        document.getElementById("erdemjegy").innerHTML = "5 Jeles";
        document.getElementById("erdemjegy").style.color = "lightgreen";
    }
}
function Orr(){
    window.alert("Miért nyomtad meg az orrot?");
}
function ErettsegiDone(){
    var magyari = parseInt(document.getElementById("magyari").value);
    var mateki = document.getElementById("mateki").value;
    var torii = document.getElementById("torii").value;
    var nyelvi = document.getElementById("nyelvi").value;
    var magyars = document.getElementById("magyars").value;
    var mateks = document.getElementById("mateks").value;
    var toris = document.getElementById("toris").value;
    var nyelvs = document.getElementById("nyelvs").value;

    document.getElementById("asd").innerHTML = "asd";
}