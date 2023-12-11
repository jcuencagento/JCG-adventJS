function organizeGifts(gifts) {
    let result = [];
    let arr = gifts.split(/(\d+|\D+)/).filter(Boolean);
    for (let i = 0; i < arr.length; i++) {
        let value = parseInt(arr[i]);
        while (value > 0) {
            if (value >= 50) {
                result.push(`[${arr[i+1]}]`);
                value = value - 50;
            } else if (value >= 10) {
                result.push(`{${arr[i+1]}}`);
                value = value - 10;
            } else {
                result.push(`(${arr[i+1].repeat(value)})`);
                value = 0;
            }
        }

        i++;
    }

    return result.join('');
}

console.log('Result with 76a11b:', organizeGifts('76a11b'));