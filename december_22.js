function compile(code) {
    let result = 0;
    let ret_point = -1;
    let positive = true;
    let iteration = 0;
    let next = 0;
    while (next < code.length) {
        iteration++;
        if (!positive) {
            if (code[next] === '?') {
                positive = true;
            } else {
                next++;
                continue; 
            }
        }
  
        switch(code[next]) {
            case '+':
                result = result + 1;
            break;
    
            case '*':
                result = result * 2;
            break;
    
            case '-':
                result = result - 1;
            break;
    
            case '%':
                ret_point = next;
            break;
    
            case '<':
                if (ret_point > 0) {
                    next = ret_point > -1 ? ret_point : next;
                    ret_point = - 1;
                }
            break;
    
            case '¿':
                positive = result > 0;
            break;
        }

        next++;
        console.log('Result:', result);
        console.log('Iteration number:', iteration);
        console.log('Next index number:', next);
        console.log('Returning to index number:', ret_point);
        console.log('Positive number:', positive);
        console.log(' ');
    }

    return result;
}

console.log(`Result with compile('<%+¿++%++<?')`, compile('<%+¿++%++<?'));