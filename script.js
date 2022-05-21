window.onload = function () {
    var stage = document.getElementById('stage');
    var contexto = stage.getContext("2d");

    setInterval(game, 200);

    document.addEventListener("keydown", keyPush);

    const velocidade = 1;
    var velocidadeX = velocidadeY = 0;

    var pontoX = pontoY = 10;//Cabeça da cobra

    var tamanhoPonto = pontosX = pontosY = 20;

    var foodX = foodY = 15;

    var trail = [];
    tail = 5;

    function game() {

        pontoX += velocidadeX;
        pontoY += velocidadeY;

        if (pontoX < 0) {//Ser a cabeça alcançar a borda da esquerda
            pontoX = pontosX - 1;
        }
        if (pontoX > pontosX - 1) {//Se a cabeça alcançar a borda da direita
            pontoX = 0;
        }
        if (pontoY < 0) {//se a cabeça alcançar a borda de cima
            pontoY = pontosY - 1;
        }
        if (pontoY > pontosY - 1) {//Se a cabeça alcançar a borda de baixo
            pontoY = 0;
        }

        contexto.fillStyle = "black";//cor do fundo
        contexto.fillRect(0, 0, stage.width, stage.height);

        contexto.fillStyle = "red";//Pinta o food
        contexto.fillRect(foodX * tamanhoPonto, foodY * tamanhoPonto, tamanhoPonto, tamanhoPonto);

        contexto.fillStyle = "white";//cor da cobra

        for (var i = 0; i < trail.length; i++) {

            contexto.fillRect(trail[i].x * tamanhoPonto, trail[i].y * tamanhoPonto, tamanhoPonto-3, tamanhoPonto-3); //-3 é o margin

            if (trail[i].x == pontoX && trail[i].y == pontoY) {//Ser cabeça colidir com a calda

                velocidadeX = velocidadeY = 0; //Tá feio era bom jogar um warn(tratar)
                tail = 5;
            }

        }
        //criou o array e substituiu
        trail.push({ x: pontoX, y: pontoY }); //SE não colidir o jogo continua

        while (trail.lenght > tail) {// se a trilha estiver maior que a calda
            trail.shift();//Tira o primeiro elemento do array         
        }
        if (foodX == pontoX && foodY == pontoY) {
            tail++;
            foodX = Math.floor(Math.random() * pontosX);
            foodY = Math.floor(Math.random() * pontosY);
        }
    }

    function keyPush(event) {//Evento dos botões

        switch (event.keyCode) {
            case 37: // tecla left
                velocidadeX = - velocidade;
                velocidadeY = 0;
                break;
            case 38: // tecla up
                velocidadeX = 0;
                velocidadeY = - velocidade;
                break;
            case 39: // tecla right
                velocidadeX = velocidade;
                velocidadeY = 0;
                break;
            case 40: //tecla down
                velocidadeX = 0;
                velocidadeY = velocidade;
                break;
            default:
                break;
        }
    }

}