function autonomousDrive(store, movements) {
    let row = store.findIndex(el => el.includes('!'));
    let col = store[row].indexOf('!');
    store[row] = store[row].replace('!', '.');
    for (const mv of movements) {
        switch (mv) {
            case 'R':
                col += +(store[row][col + 1] === '.');
                break;
    
            case 'L':
                col -= +(store[row][col - 1] === '.');
                break;
    
            case 'D':
                row += +(store.at(row + 1)?.at(col) === '.');
                break;
            
            default:
                row -= +(store.at(row - 1)?.at(col) === '.');
                break;
        }
    }

    store[row] = store[row].substring(0, col) + '!' + store[row].substring(col + 1);
    return store;
  }

console.log(`Result:`,
    autonomousDrive(
        [
        '..!....',
        '......*'
        ],
        ['R', 'D', 'L']
    )
);