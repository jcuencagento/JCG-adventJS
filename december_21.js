function findBalancedSegment(message) {
    let actual = [0]
    for (let i = 0; i < message.length; i ++) {
        let check_balance = message[i], cont = 1
        for (let j = i + 1; j < message.length; j ++) {
            check_balance += message[j]
            if (++cont / check_balance === 2 && cont > actual[0]) actual = [cont, i, j]
        }
    }

    return actual.slice(1)
}

console.log(`Result with findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])`, findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1]));