const nezuko = document.querySelector('.nezuko');
const tubo = document.querySelector('.tubo');

let score = 0;

const updateScore = () => {
    score++;
    document.getElementById('score').textContent = score;
}


const resetGame = () => {
    window.location.reload();
}

const pulo = () => {
    nezuko.classList.add('pulo');

    setTimeout(() => {
        nezuko.classList.remove('pulo');
    }, 800);
    updateScore();
    if (score >= 5) {
        clearInterval(loop);
        document.querySelector('.win').style.display = 'block';
        document.querySelector('.nuvens').style.display = 'block';
        document.querySelector('.moon').style.display = 'none';
        document.querySelector('.star').style.display = 'none';
        document.querySelector('.tanjiro').style.display = 'block';
        document.querySelector('.game-board').style.background = 'linear-gradient(#87CEEB, #E0F6FF)';
        tubo.style.display = 'none';
    }

}

function handleInput() {
    pulo();
}

document.addEventListener('touchstart', handleInput);
document.addEventListener('keydown', handleInput);

const loop = setInterval(()=>{

	const tuboPosition = tubo.offsetLeft;
    const nezukoPosition = +window.getComputedStyle(nezuko).bottom.replace('px', '');

    if (tuboPosition <= 120 && tuboPosition > 0 && nezukoPosition <80) {
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosition}px`

        nezuko.style.animation = 'none';
        nezuko.style.bottom = `${nezukoPosition}px`

        nezuko.src = './images/nezuko-game-over.png'
        nezuko.style.width = '125px'
        document.querySelector('.game-over').style.display = 'block';

        clearInterval(loop)
    } 
}, 10)