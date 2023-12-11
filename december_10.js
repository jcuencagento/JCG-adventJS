function createChristmasTree(ornaments, height) {
    const ornaments_rep = ornaments.repeat(height*(height-1));
    let r = '';
    for (let i = 1, j = 0; i <= height; j+=i, i++) {
        r += ornaments_rep
            .slice(j, j+i)
            .split('')
            .join(' ')
            .padStart(height+i-1) + '\n'
    }

    return r + ' '.repeat(height - 1) + '|' + '\n'
}

console.log('Result with *@o and 8:\n' + createChristmasTree('*@o', 8));