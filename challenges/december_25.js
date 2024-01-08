function travelDistance(map) {
    const map_arr = map.split('\n');
    let row = map_arr.findIndex(el => el.includes('S'));
    let col = map_arr[row].indexOf('S');
    let i = 1;
    let result = 0;
    do {
        let row_kid = map_arr.findIndex(el => el.includes(`${i}`));
        let col_kid = map_arr[row_kid].indexOf(`${i}`);
        let distance = Math.abs(row - row_kid) + Math.abs(col - col_kid);
        result += distance;
        row = row_kid;
        col = col_kid;
        i = i + 1;
    } while (map_arr.findIndex(el => el.includes(`${i}`)) !== -1);

  return result;
}

console.log(`Result with travelDistance(
    '.....1....
     ..S.......
     ..........
     ....3.....
     ......2...')`, 
travelDistance(
    `.....1.... 
     ..S.......
     ..........
     ....3.....
     ......2...`));