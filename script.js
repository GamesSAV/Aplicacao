
document.addEventListener('DOMContentLoaded', () => {
    const gamePreview = document.querySelectorAll('.gamePreview');

    gamePreview.forEach((gamePreview, index) => {
        gamePreview.addEventListener('click', () => {
            //alert(`Você clicou na caixinha ${index + 1}`);
            const saudacao   = document.getElementById('saudacao');
            const panelGames = document.getElementById('panelGames');
            const gameArea   = document.getElementById('gameArea');
            // Aqui você pode adicionar ações diferentes para cada caixinha
            switch (index) {
                case 0:
                    // Ação para a caixinha 1
                    //gamePreview.style.backgroundColor = 'red';
                        saudacao.classList.add('oculto');
                        panelGames.classList.add('oculto');
                        //fetch('../gameEmpurraCaixas/index.html').then(response => response.text()).then(data => {gameArea.innerHTML = data;}).catch(error => console.error('Erro ao carregar o conteúdo:', error));
                        fetch('https://gamessav.github.io/Aplicacao/gameEmpurraCaixas/index.html')
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Erro na rede: ' + response.statusText);
                            }
                            return response.text();
                        })
                        .then(data => {
                            document.getElementById('gameArea').innerHTML = data;
                        })
                        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
                        document.getElementById('gameArea').classList.remove('oculto');
                    break;
                case 1:
                    // Ação para a caixinha 2
                    gamePreview.style.backgroundColor = 'blue';
                    break;
                // Adicione mais cases conforme necessário
                default:
                    gamePreview.style.backgroundColor = 'green';
            }
        });
    });
});
