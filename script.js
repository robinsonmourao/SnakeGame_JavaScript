window.onload = function() {
    var stage = document.getElementById('stage');
    var contexto = stage.getContext("2d");    

    setInterval(game, 100);

    const velocidade = 1;
    var velocidadeX = velocidadeY = 0;

    var pontoX = pontoY = 10;//Cabeça da cobra

    var tamanhoPonto = pontosX = pontosY = 20;

    var foodX = foodY = 15;

    var trail = [];
    tail = 4;

    function game(){

        pontoX += velocidadeX;
        pontoY += velocidadeY;

        if(pontoX < 0){//Ser a cabeça alcançar a borda da esquerda
            pontoX = pontosX -1;
        }
        if(pontoX > pontosX -1){//Se a cabeça alcançar a borda da direita
            pontoX = 0;
        }
        if(pontoY < 0){//se a cabeça alcançar a borda de cima
            pontoY = pontosY -1;
        }
        if(pontoY > pontosY -1){//Se a cabeça alcançar a borda de baixo
            pontoY = 0;
        }

        contexto.fillStyle = "blue";
        contexto.fillRect(0, 0, stage.width, stage.height);

        contexto.fillStyle = "red";//Pinta o food
        contexto.fillRect(foodX * tamanhoPonto, foodY * tamanhoPonto, tamanhoPonto, tamanhoPonto);

        contexto.fillStyle = "gray";
        for (var index = 0; index < trail.length; index++) {
            const element = array[index];
            
        }
    }

    

}