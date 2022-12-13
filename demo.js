/*
Time Complexity: O(n^2)
*/

// Javascript program to find number of possible moves of knight

let n = 4;
let m = 4;

// To calculate possible moves
function findPossibleMoves(mat, p, q) {
    // All possible moves of a knight
    let X = [2, 1, -1, -2, -2, -1, 1, 2];
    let Y = [1, 2, 2, 1, -1, -2, -2, -1];

    let count = 0;

    // Check if each possible move is valid or not
    for (let i = 0; i < 8; i++) {

        // Position of knight after move
        let x = p + X[i];
        let y = q + Y[i];

        // count valid moves
        if (x >= 0 && y >= 0 && x < n && y < m && mat[x][y] == 0)
            count++;
    }

    // Return number of possible moves
    return count;
}

let mat = [[1, 0, 1, 0],
[0, 1, 1, 1],
[1, 1, 0, 1],
[0, 1, 1, 1]];

let p = 2, q = 2;

console.log(findPossibleMoves(mat, p, q));


