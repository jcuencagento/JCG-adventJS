function drawClock(time) {
    const nums = {
        '0': ['***','* *','* *','* *','* *','* *','***'],
        '1': ['  *','  *','  *','  *','  *','  *','  *'],
        '2': ['***','  *','  *','***','*  ','*  ','***'],
        '3': ['***','  *','  *','***','  *','  *','***'],
        '4': ['* *','* *','* *','***','  *','  *','  *'],
        '5': ['***','*  ','*  ','***','  *','  *','***'],
        '6': ['***','*  ','*  ','***','* *','* *','***'],
        '7': ['***','  *','  *','  *','  *','  *','  *'],
        '8': ['***','* *','* *','***','* *','* *','***'],
        '9': ['***','* *','* *','***','  *','  *','***'],
        ':': [' ', ' ', '*', ' ', '*', ' ', ' '],
    };
  
    const num0 = nums[time[0]];
    const num1 = nums[time[1]];
    const point = nums[':'];
    const num3 = nums[time[3]];
    const num4 = nums[time[4]];
    const res = [...num0];
    let pos = 0;
    for (let row of res) {
        const str =  `${row} ${num1[pos]} ${point[pos]} ${num3[pos]} ${num4[pos]}`;
        res[pos] = [...str];
        pos++;
    };

    return res;
}

console.log(`Result with drawClock('01:30')`, drawClock('01:30'));