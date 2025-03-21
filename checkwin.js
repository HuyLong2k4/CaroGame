 function checkwin(board, x, y, player) {
    const directions = [
        { dx: 1, dy: 0 },  // Ngang
        { dx: 0, dy: 1 },  // Dọc
        { dx: 1, dy: 1 },  // Chéo chính
        { dx: 1, dy: -1 }  // Chéo phụ
    ];

    for (const { dx, dy } of directions) {
        let count = 1;

        // Kiểm tra hướng đi xuôi
        let i = x + dx, j = y + dy;
        while (board[i] && board[i][j] === player) {
            count++;
            i += dx;
            j += dy;
        }

        // Kiểm tra hướng đi ngược
        i = x - dx, j = y - dy;
        while (board[i] && board[i][j] === player) {
            count++;
            i -= dx;
            j -= dy;
        }

        // Nếu đủ 5 quân liên tiếp thì thắng
        if (count >= 5) return true;
    }

    return false;
}

module.exports = checkwin; 
