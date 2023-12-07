function drawGift(size, symbol) {
    let box = '';
    if (size === 1) {
      return '#\n';
    }
  
    for (let i = 0; i < size - 1; i++) {
        if (i === 0) {
            box = box.concat(
              ' '.repeat(size-1), 
              '#'.repeat(size), 
              '\n'
            );
        } else {
            box = box.concat(
              ' '.repeat(size-1-i),
              '#', 
              symbol.repeat(size-2), 
              '#', 
              symbol.repeat(i-1), 
              '#\n'
            );
        }
    }
  
    for (let i = size; i > 0; i--) {
        if (i === size) {
            box = box.concat(
              '#'.repeat(size),
              symbol.repeat(size-2),
              '#\n'
            );
        } else if (i === 1) {
            box = box.concat(
              '#'.repeat(size),
              '\n'
            );
        } else {
            box = box.concat(
              '#',
              symbol.repeat(size-2),
              '#',
              symbol.repeat(i-2),
              '#\n'
            );
        }
    }
  
    return box;
}

console.log(drawGift(3, '?'));