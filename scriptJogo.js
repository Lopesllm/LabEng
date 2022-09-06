var numeroAleatorio= Math.floor(Math.random() * 100) + 1;

    var palpites = document.querySelector('.palpites');
    var ultimoResultado = document.querySelector('.ultimoResultado');
    var baixoOuAlto = document.querySelector('.baixoOuAlto');

    var envioPalpite = document.querySelector('.envioPalpite');
    var campoPalpite = document.querySelector('.campoPalpite');

    var contagemPalpites = 1;
    var botaoReinicio;

    function conferirPalpite() {
        var palpiteUsuario = Number(campoPalpite.value);
        if (contagemPalpites === 1) {
            palpites.textContent = 'Palpites anteriores: ';
            }

        palpites.textContent += palpiteUsuario + ' ';

        if (palpiteUsuario === numeroAleatorio) {
            ultimoResultado.textContent = 'Parabéns! Você acertou!';
            ultimoResultado.style.backgroundColor = 'green';
            baixoOuAlto.textContent = '';
            configFimDeJogo();
        } else if (contagemPalpites === 10) {
            ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
            baixoOuAlto.textContent = '';
            configFimDeJogo();
        } else {
            ultimoResultado.textContent = 'Errado!';
            ultimoResultado.style.backgroundColor = 'red';
            if(palpiteUsuario < numeroAleatorio) {
                baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
            } else if(palpiteUsuario > numeroAleatorio) {
                baixoOuAlto.textContent = 'Seu palpite está muito alto!';
                }
            }
        contagemPalpites++;
        campoPalpite.value = '';
        campoPalpite.focus();
        }
    envioPalpite.addEventListener('click', conferirPalpite);

    function configFimDeJogo() {
        campoPalpite.disabled = true;
        envioPalpite.disabled = true;
        botaoReinicio = document.createElement('button');
        botaoReinicio.textContent = 'Iniciar novo jogo';
        document.body.appendChild(botaoReinicio);
        botaoReinicio.addEventListener('click', reiniciarJogo);
        }
    
    function reiniciarJogo() {
        //Coloca o valor da variável contagemPalpites novamente igual a 1.
        contagemPalpites = 1;

        //Limpa todos os parágrafos de informativos.
        var reiniciarParas = document.querySelectorAll('.resultadoParas p');
        for (var i = 0 ; i < reiniciarParas.length ; i++) {
            reiniciarParas[i].textContent = '';
        }

        //Remove o botão resete do nosso código.
        botaoReinicio.parentNode.removeChild(botaoReinicio);
        
        //Habilita os elementos do formulários, esvazia e direciona o foco ao campo de texto, pronto para que um novo palpite seja inserido.
        campoPalpite.disabled = false;
        envioPalpite.disabled = false;
        campoPalpite.value = '';
        campoPalpite.focus();
        
        //Remove a cor de fundo do parágrafo ultimoResultado.
        ultimoResultado.style.backgroundColor = 'white';

        //Gera um novo número aleatório para que o jogador não esteja tentando adivinhar o mesmo número novamente!
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        }