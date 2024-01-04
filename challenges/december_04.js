function decode(message) {
    while (message.includes('(')) {
        const inner_open = message.lastIndexOf('(');
        const inner_close = message.indexOf(')', inner_open);
        message = 
            message.slice(0, inner_open) + 
            [...message.slice(inner_open+1, inner_close)].reverse().join('') +
            message.slice(inner_close+1, message.length);
    }
  
    return message;
}