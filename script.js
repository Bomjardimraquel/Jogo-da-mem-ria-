document.addEventListener("DOMContentLoaded", function() {
    const grid = document.querySelector('.grid');
    const resultDisplay = document.getElementById('result');
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const qualities = ['Sincero', 'Compreensivo', 'Sensível', 'Afetuoso', 'Espiritual', 'Íntegro'];
    let cards = [...qualities, ...qualities]; // Duplicate the qualities array
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let matchedPairs = 0;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function createGrid() {
        grid.innerHTML = ''; // Limpa o grid antes de criar um novo
        cards = shuffle(cards);
        for (let i = 0; i < cards.length; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.innerHTML = `
                <div class="cell-inner">
                    <div class="cell-front"></div>
                    <div class="cell-back" style="font-family: 'Audiowide', sans-serif;">${cards[i]}</div>
                </div>
            `;
            cell.addEventListener('click', flipCard);
            grid.appendChild(cell);
        }
    }

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        lockBoard = true;

        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.querySelector('.cell-back').textContent === secondCard.querySelector('.cell-back').textContent;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        matchedPairs++;
        if (matchedPairs === qualities.length) {
            resultDisplay.classList.remove('hidden');
            envelope.classList.remove('hidden'); // Exibe o envelope
        }

        resetBoard();
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    createGrid();
});

function showLetter() {
    document.getElementById('letter').classList.remove('hidden');
    document.getElementById('envelope').classList.add('hidden'); // Esconde o envelope
}

function resetGame() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('letter').classList.add('hidden');
    document.getElementById('envelope').classList.add('hidden');
    matchedPairs = 0; 
    createGrid(); // Cria um novo grid
}


