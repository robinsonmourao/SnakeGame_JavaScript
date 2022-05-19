window.onload = function(){
    var cenario = document.getElementById("cenario");
    var contexto = cenario.getContext("2d");

    setInterval(game, 60); //ms de atualização do jogo

   

    contexto.fillStyle = "black";
    contexto.fillRect(0,0, cenario.Width, cenario.height);

}