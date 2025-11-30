export function checkWinner(initialField, pattern) {
    return pattern.some((array) => {
        return (
            array.every((index) => initialField[index] === 'X') ||
            array.every((index) => initialField[index] === 'O')
        );
    });
}

export function checkNotFindEmptyCell(array) {
    return array.every((cell) => {
        return cell !== '';
    });
}
