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
    var mateki = parseInt(document.getElementById("mateki").value);
    var torii = parseInt(document.getElementById("torii").value);
    var nyelvi = parseInt(document.getElementById("nyelvi").value);
    var magyars = parseInt(document.getElementById("magyars").value);
    var mateks = parseInt(document.getElementById("mateks").value);
    var toris = parseInt(document.getElementById("toris").value);
    var nyelvs = parseInt(document.getElementById("nyelvs").value);
    var magyar = (magyari + magyars)/150*100;
    var matek = (mateki +mateks)/150*100;
    var tori = (torii + toris)/150*100;
    var nyelv = (nyelvi + nyelvs)/150*100;
    if(magyari<12 || magyars<12){
        document.getElementById("magyar").innerHTML = "Magyar: 1 Elégtelen";
    }
    else if(magyar<30){
        document.getElementById("magyar").innerHTML = "Magyar: 1 Elégtelen";
    }else if(magyar<40){
        document.getElementById("magyar").innerHTML = "Magyar: 2 Elégséges";
    }else if(magyar<60){
        document.getElementById("magyar").innerHTML = "Magyar: 3 Közepes";
    }else if(magyar<80){
        document.getElementById("magyar").innerHTML = "Magyar: 4 Jó";
    }else{
        document.getElementById("magyar").innerHTML = "Magyar: 5 Jeles";
    }

    if(mateki<12 || mateks<12){
        document.getElementById("matek").innerHTML = "Matematika: 1 Elégtelen";
    }
    else if(matek<30){
        document.getElementById("matek").innerHTML = "Matematika: 1 Elégtelen";
    }else if(matek<40){
        document.getElementById("matek").innerHTML = "Matematika: 2 Elégséges";
    }else if(matek<60){
        document.getElementById("matek").innerHTML = "Matematika: 3 Közepes";
    }else if(matek<80){
        document.getElementById("matek").innerHTML = "Matematika: 4 Jó";
    }else{
        document.getElementById("matek").innerHTML = "Matematika: 5 Jeles";
    }

    if(torii<12 || toris<12){
        document.getElementById("tori").innerHTML = "Történelem: 1 Elégtelen";
    }
    else if(tori<30){
        document.getElementById("tori").innerHTML = "Történelem: 1 Elégtelen";
    }else if(tori<40){
        document.getElementById("tori").innerHTML = "Történelem: 2 Elégséges";
    }else if(tori<60){
        document.getElementById("tori").innerHTML = "Történelem: 3 Közepes";
    }else if(tori<80){
        document.getElementById("tori").innerHTML = "Történelem: 4 Jó";
    }else{
        document.getElementById("tori").innerHTML = "Történelem: 5 Jeles";
    }

    if(nyelvi<12 || nyelvs<12){
        document.getElementById("nyelv").innerHTML = "Idegennyelv: 1 Elégtelen";
    }
    else if(nyelv<30){
        document.getElementById("nyelv").innerHTML = "Idegennyelv: 1 Elégtelen";
    }else if(nyelv<40){
        document.getElementById("nyelv").innerHTML = "Idegennyelv: 2 Elégséges";
    }else if(nyelv<60){
        document.getElementById("nyelv").innerHTML = "Idegennyelv: 3 Közepes";
    }else if(nyelv<80){
        document.getElementById("nyelv").innerHTML = "Idegennyelv: 4 Jó";
    }else{
        document.getElementById("nyelv").innerHTML = "Idegennyelv: 5 Jeles";
    }
}

function Magyar(){
    
}