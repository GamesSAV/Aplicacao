const colors = ['red', 'green', 'blue', 'yellow'];
let sequence = [];
let playerSequence = [];
let level = 0;

const startButton = document.getElementById('start');
const colorElements = document.querySelectorAll('.color');
const messageElement = document.getElementById('message');

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Jogo iniciado');
    sequence = [];
    playerSequence = [];
    level = 0;
    messageElement.textContent = 'Reproduzindo sequência...';
    nextLevel();
}

function nextLevel() {
    level++;
    playerSequence = [];
    const nextColor = colors[Math.floor(Math.random() * colors.length)];
    sequence.push(nextColor);
    playSequence();
}

function playSequence() {
    let delay = 0;
    messageElement.textContent = 'Reproduzindo sequência...';
    sequence.forEach((color, index) => {
        setTimeout(() => {
            flashColor(color);
        }, delay);
        delay += 600;
    });
    setTimeout(() => {
        messageElement.textContent = 'Sua vez!';
    }, delay);
}

function flashColor(color) {
    const element = document.getElementById(color);
    console.log(`Piscar cor: ${color}`);
    element.classList.add('active');
    setTimeout(() => {
        element.classList.remove('active');
        console.log(`Remover piscar: ${color}`);
    }, 400);
}

colorElements.forEach(element => {
    element.addEventListener('click', (event) => {
        const color = event.target.id;
        playerSequence.push(color);
        flashColor(color);
        checkSequence();
    });
});

function checkSequence() {
    const currentLevel = playerSequence.length - 1;
    if (playerSequence[currentLevel] !== sequence[currentLevel]) {
        alert('Game Over! Você alcançou o nível ' + level);
        startGame();
        return;
    }
    if (playerSequence.length === sequence.length) {
        messageElement.textContent = 'Preparando nível '+parseInt(level+1);
        setTimeout(nextLevel, 2000);
    }
}
