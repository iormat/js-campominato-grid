/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100 facile
con difficoltà 2 => tra 1 e 81 medio
con difficoltà 3 => tra 1 e 49 difficile
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, 
l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).
*/

/*
1. give user the ability to choose the difficulty
    (Dare all'utente la possibilità di scegliere la difficoltà)
2. make clickable cells that changes to give user the feeling of "selection"
    (creare celle cliccabili che cambiano per dare senso all'utente di "selezione")
    2.1 make a function to create a set number of elements
        (fare una funzione per creare un numero definito di elementi)
        2.2 make sure to create a grid based on user choice
            (assicurarsi di creare una griglia che prende in considerazione la scelta dell'utente)
*/

const mineField = document.getElementById('minefield');

//function to create squares
function createSquare(squareCont, squareStyle, gameDiff) {
    let node = document.createElement(squareCont);
    node.classList.add(squareStyle , gameDiff);
    return node;
}

// easy
document.getElementById('easy').addEventListener('click',
    function() {
        for(let i = 1; i < 101; i++) {
            let newElement = createSquare('div', 'square', 'easy');
            mineField.appendChild(newElement);
            newElement.addEventListener('click',
            function(){
                    newElement.innerHTML = i;
                    newElement.classList.add('active');
                }
            );
        }
        document.getElementById('easy').disabled = true;
        document.getElementById('medium').disabled = true;
        document.getElementById('hard').disabled = true;
    }
);
//  medium
document.getElementById('medium').addEventListener('click',
    function() {
        for(let i = 1; i < 82; i++) {
            let newElement = createSquare('div', 'square', 'medium');
            mineField.appendChild(newElement);
            newElement.addEventListener('click',
                function(){
                    newElement.innerHTML = i;
                    newElement.classList.add('active');
                }
            );
        }
        document.getElementById('easy').disabled = true;
        document.getElementById('medium').disabled = true;
        document.getElementById('hard').disabled = true;
    }
);
//hard
document.getElementById('hard').addEventListener('click',
    function() {
        for(let i = 1; i < 50; i++) {
            let newElement = createSquare('div', 'square', 'hard');
            mineField.appendChild(newElement);
            newElement.addEventListener('click',
                function(){
                    newElement.innerHTML = i;
                    newElement.classList.add('active');
                }
            );
        }
        document.getElementById('easy').disabled = true;
        document.getElementById('medium').disabled = true;
        document.getElementById('hard').disabled = true;
    }
);
