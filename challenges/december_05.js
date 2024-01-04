function cyberReindeer(road, time) {
    let arr_road = road.split('');
    let last = '.';
    const result = [road];
    let next_id = 1;

    for (let i = 1; i < time; i++) {
        if (i > 4) {
            arr_road = [...arr_road.join('').replaceAll('|', '*')];
            arr_road[next_id - 1] = last;
            last = arr_road[next_id];
            arr_road[next_id++] = 'S';
            result.push(arr_road.join(''));
            continue;
        } else if (arr_road[next_id] !== '|') {
            arr_road[next_id - 1] = last;
            last = arr_road[next_id];
            arr_road[next_id++] = 'S';
        }

        result.push(arr_road.join(''));
    }

    return result;
}