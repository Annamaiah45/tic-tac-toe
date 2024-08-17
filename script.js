const b = document.getElementById('board');
const c = document.getElementsByClassName('cell');
const btn = document.getElementById('btn');
const p = ['X', 'O'];
let cu = p[0];
const h = document.createElement('h3');
h.textContent = "X's turn";
b.before(h);
let gameOver = false;

const ww = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

for (let i = 0; i < c.length; i++) {
    c[i].addEventListener("click", () => {
        if (gameOver || c[i].textContent !== '') {
            return;
        }
        c[i].textContent = cu;
        console.log(nn);
        if (win(cu)) {
            h.textContent = `Game over! ${cu} wins`;
            gameOver = true;
            return;
        }

        if (tie()) {
            h.textContent = 'Game is tied';
            gameOver = true;
            return;
        }

        cu = (cu === p[0]) ? p[1] : p[0];
        if (cu === p[0]) {
            h.textContent = "X's turn";
        } else {
            h.textContent = "O's turn";
        }
    });
}

function win(cu) {
    for (let i = 0; i < ww.length; i++) {
        const [x, y, z] = ww[i];
        if (c[x].textContent === cu && c[y].textContent === cu && c[z].textContent === cu) {
            c[x].style.backgroundColor = "beige";
            c[y].style.backgroundColor = "beige";
            c[z].style.backgroundColor = "beige";
            return true;
        }
    }
    return false;
}

function tie() {
    for (let i = 0; i < c.length; i++) {
        if (c[i].textContent === '') {
            return false;
        }
    }
    return true;
}

function rst() {
    for (let i = 0; i < c.length; i++) {
        c[i].textContent = "";
        c[i].style.backgroundColor = "white";
    }
    h.textContent = "X's turn";
    cu = p[0];
    gameOver = false;
}
