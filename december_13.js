function calculateTime(deliveries) {
    let deliv_time = 0;
    deliveries.forEach(del => {
        const [hh, mm, ss] = del.split(':');
        deliv_time += parseInt(hh)*3600 + parseInt(mm)*60 + parseInt(ss);
    });
    
    let result = Math.abs(25200 - deliv_time);
    let r_hh = 0;
    let r_mm = 0;
    let r_ss = 0;
    while (result > 0) {
        if (result > 3599) {
            r_hh++;
            result -= 3600;
        } else if (result > 59) {
            r_mm++;
            result -= 60;
        } else {    
            r_ss = result;
            result = 0;
        }
    }
    return 25200 > deliv_time 
        ? `-0${r_hh}:${r_mm > 9 ? r_mm : '0' + r_mm}:${r_ss > 9 ? r_ss : '0' + r_ss}`
        : `0${r_hh}:${r_mm > 9 ? r_mm : '0' + r_mm}:${r_ss > 9 ? r_ss : '0' + r_ss}`;
}
  

console.log(`Result with ['00:45:00', '00:45:00', '00:00:30', '00:00:30']:`, calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']));