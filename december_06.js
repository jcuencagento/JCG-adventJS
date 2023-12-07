function maxDistance(movements) {
    const array = movements.split('');
    const right = array.filter(mov => mov === '>').length;
    const left = array.filter(mov => mov === '<').length;
    const both = array.length - right - left;
    return Math.abs(right - left) + both;
}