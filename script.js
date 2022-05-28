window.onload = function () {
    var stage = document.getElementById('stage');
    var contexto = stage.getContext("2d");
    var marginBlocos = 2;

    setInterval(game, 200);

    document.addEventListener("keydown", keyPush);//Adiciona evento de tecla

    const velocidade = 1;
    var velocidadeX = velocidadeY = 0;

    var pontoX = pontoY = 10;//Posição inicial da CABEÇA(10x10)        
    var foodX = foodY = 15;//Posição inicial da COMIDA(15x15)

    const pontosX = pontosY = 20; //Tamanho do cenário
    const tamanhoPonto = 20; //Tamanho dos blocos

    tail = 2; //Cauda em inteiro
    var trail = [tail]; //Cauda em matriz
    

    var score = 0;
    var multiplier = 3;

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
        contexto.fillRect(0, 0, stage.width, stage.height); // Colorir de X=0, Y=0 até x(largura total), y(altura total)

        contexto.fillStyle = "yellow";//Pinta o food
        contexto.fillRect(foodX * tamanhoPonto, foodY * tamanhoPonto, tamanhoPonto - marginBlocos, tamanhoPonto - marginBlocos);
        
        //--------------------------------------------- RENDER DA COBRINHA ----------------------------------------------------
        contexto.fillStyle = "white";//cor da cobra
        for (var i = 0; i < trail.length; i++) {//Rastro utilizado para colisões. deve deslizar conforme a cobra anda

            contexto.fillRect(trail[i].x * tamanhoPonto, trail[i].y * tamanhoPonto, tamanhoPonto - marginBlocos, tamanhoPonto - marginBlocos);

            if (trail[i].x == pontoX && trail[i].y == pontoY) { //Ser cabeça colidir com a calda

                if(score != 0){
                    alert("Voce perdeu!");
                }
                resetGame();
            }
        }

        //criou o array e substituiu ?????????????????????????
        trail.push({ x: pontoX, y: pontoY }); //SE não colidir o jogo continua

        while (trail.length > tail) { // se a trilha estiver maior que a calda
            trail.shift(); //Aumenta 1 bloco        
        }

        //--------------------- GERAR COMIDA --------------------------
        if (foodX == pontoX && foodY == pontoY) {//Se pegar o food   

            tail++;
            foodX = Math.floor(Math.random() * pontosX);
            foodY = Math.floor(Math.random() * pontosY);

            atualizarScore();
        }
    }

    //---------------------- Funções auxiliares --------------------------
    function resetGame(){
        velocidadeX = velocidadeY = 0;
        pontoX = pontoY = 10;//Posição inicial da CABEÇA(10x10)        
        foodX = foodY = 15;//Posição inicial da COMIDA(15x15)              
        tail = 2;
        score = 0;
    }

    function atualizarScore() {

        score += trail.length * multiplier;
        document.getElementById("scoreText").innerHTML = score;
    }

    function cobrinhaParada() {
        if (velocidadeX == 0 && velocidadeY == 0) {
            return true;
        }
    }

    //----------------------- Eventos de teclas direcionais ------------------------------
    function keyPush(event) {//Evento dos botões

        switch (event.keyCode) {
            case 37: // tecla left
            case 65: // tecla A
                //Esquerda somente se a cabeça já estiver indo pra cima ou pra baixo OU cauda igual a 2
                if (velocidadeX == 0 && velocidadeY != 0 || cobrinhaParada()) {
                    velocidadeX = - velocidade;
                    velocidadeY = 0;
                }
                break;
            case 38: // tecla up
            case 87: // W
                //Cima somente se a cabeça já estiver indo para direita ou esquerda
                if (velocidadeX != 0 && velocidadeY == 0 || cobrinhaParada()) {
                    velocidadeX = 0;
                    velocidadeY = - velocidade;
                }
                break;
            case 39: // tecla right
            case 68: // tecla D
                if (velocidadeX == 0 && velocidadeY != 0 || cobrinhaParada()) {
                    velocidadeX = velocidade;
                    velocidadeY = 0;
                }
                break;
            case 40: //tecla down
            case 83: // tecla S
                if (velocidadeX != 0 && velocidadeY == 0 || cobrinhaParada()) {
                    velocidadeX = 0;
                    velocidadeY = velocidade;
                }
                break;
            default:
                break;
        }
    }
}