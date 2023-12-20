function maxGifts(houses) {
    const pair = houses.slice(0, 2);
    for (const house of houses.slice(2)) {
        pair.push(Math.max(...pair.slice(0, -1)) + house);
    }

    return Math.max(...pair);
}

console.log(`Result with [1, 3, 5, 2, 13, 4]:`, maxGifts([1, 3, 5, 2, 13, 4]));