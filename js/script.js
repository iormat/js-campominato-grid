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
3. when pressed, cells must look different to confirm selection
    (quando premute, le celle devono cambiare per confermare la selezione)
*/

const mineField = document.getElementById('minefield');
// 1.
const diffSelection = document.getElementById('diff_selection');

//function to create squares
function createSquare(squareCont, squareStyle, gameDiff) {
    let node = document.createElement(squareCont);
    node.classList.add(squareStyle , gameDiff);
    return node;
}

document.getElementById('start_game').addEventListener('click',
    
    function() {
        
        if(diffSelection.value === "1"){
            difficulty = 101;
            gameDiff = 'easy';
        }else if(diffSelection.value === "2"){
            difficulty = 82;
            gameDiff = 'medium';
        }else if(diffSelection.value === "3"){
            difficulty = 50;
            gameDiff = 'hard';
        }
        // 2.
        for(let i = 1; i < difficulty; i++) {
            let newElement = createSquare('div', 'square', gameDiff);
            mineField.append(newElement);
            // 3.
            newElement.addEventListener('click',
                function(){
                    newElement.innerHTML = i;
                    newElement.classList.add('active');
                }
            );
        }console.log(difficulty)
    }
);