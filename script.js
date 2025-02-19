document.addEventListener("DOMContentLoaded", function() {
    const grid = document.querySelector('.grid');
    const resultDisplay = document.getElementById('result');
    const envelope = document.getElementById('envelope');
    const letter = documentletter');
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
    matchedPairs = 0;[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/ricardo-cas/pandas/tree/eefd8f3ed9250c15e029b7ae59a24ef9f7ffc4ab/GUIA_MARKDOWN.MD?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "1")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/daniel-carlos/jogo-da-memoria/tree/4fa01325afa03dee2dbdf38040c33d78ff429550/README.md?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "2")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/amarcher/secret-word-agents/tree/9d46e2b5873781b9566d64a38fbd6e0492275c7f/src%2Fgame.js?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "3")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/Aliadelik07/mnm_experiment/tree/c105662cf954307384ff62525c8ede999477e386/html%2Flib%2Futil-2020.2.js?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "4")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/derycklong/PluralSight-Angular-Tutorial/tree/f841c806af1dc94e9316799fbcee7b3cc1a0c086/node_modules%2Fsocks%2Fbuild%2Fcommon%2Futil.js?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "5")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/frkntplglu/memory-card-game/tree/387c6156145212f6bc4a31b206a2ad93f5faacbb/app.js?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "6")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/rjLaudredale/Memory-cardgame/tree/4ba06cd46caba33d71d523874e0ff69cf147a65b/app.js?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "7")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/rolandoesc/memory-card-game/tree/f743e65ee595bf6137edb72ea4cf9467528e7aae/scripts.js?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "8")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/ZoomieOS/flip-card/tree/05dff98b028f300c3d69cda635732f57ce7a5106/js%2Fmain.js?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "9")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/jennyjohnston/midterm/tree/8f3cb132b75cc82ed705331dc4b95d3f376ada76/script.js?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "10")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/Gil96/game1/tree/441572b79bb521ec195ca278e5581a75f91200a6/game2%2Fscripts.js?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "11")


