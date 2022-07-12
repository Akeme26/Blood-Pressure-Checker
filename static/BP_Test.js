let details = ()=>{  
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("updatemessage").innerHTML = xhttp.responseText;        }
    };
    xhttp.open("GET", "/result", true);
    xhttp.send();
}