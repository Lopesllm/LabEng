function horarioAtual(){
    let date = new Date().toLocaleTimeString();
    document.getElementById("rel").innerHTML = date;
    setTimeout(horarioAtual,1000);
}