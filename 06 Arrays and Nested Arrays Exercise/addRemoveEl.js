function solve(commands) {
    const result = [];
    let sum = 0;
    const num = 1;
    for (let command of commands) {
        if (command === 'add') {
            sum += num;
            result.push(sum);
        } else {
            result.pop(sum);
            sum += num;
        }
    }
    if (result.length > 0) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }
}

solve(['add',
    'add',
    'add',
    'add']);
solve(['add',
    'add',
    'remove',
    'add',
    'add']);
solve(['remove',
    'remove',
    'remove']);