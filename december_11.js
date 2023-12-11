function getIndexsForPalindrome(word) {
    if (word === word.split('').reverse().join('')) {
        return [];
    }
  
    for (let i = 0; i < word.length; i++) {
        for (let j = i+1; j < word.length; j++) {
            let array = word.split('');
            let aux = array[i];
            array[i] = array[j];
            array[j] = aux;
            if (array.join('') === array.reverse().join('')) {
                return [i, j];
            }
        }
    }
  
    return null;
}

console.log('Result with aaaannaan:', getIndexsForPalindrome('aaaannaan'));