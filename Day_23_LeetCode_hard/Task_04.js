//Task 4: Solve the "N-Queens" problem on LeetCode.
function solveNQueens(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    function isValid(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false; 
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false; // Check right diagonal
        }
        return true;
    }

    function solve(row) {
        if (row === n) {
            solutions.push(board.map(row => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                solve(row + 1);
                board[row][col] = '.'; 
            }
        }
    }

    solve(0);
    return solutions;
}

function logNQueensSolutions(n) {
    const solutions = solveNQueens(n);
    console.log(`N = ${n}`);
    solutions.forEach((solution, index) => {
        console.log(`Solution ${index + 1}:`);
        solution.forEach(row => console.log(row));
        console.log('');
    });
}

// Test case 1: N = 4
logNQueensSolutions(4);