function solve(num, ...command) {
    num = Number(num);
   
    let chop = x => x / 2;
    let dice = x => Math.sqrt(x);
    let spice = x => x + 1;
    let bake = x => x * 3;
    let fillet = x => x - x * 0.2;

    for (let i = 0; i < command.length; i++) {
        switch (command[i]) {
            case 'chop': num = chop(num);
                break;
            case 'dice': num = dice(num);
                break;
            case 'spice': num = spice(num);
                break;
            case 'bake': num = bake(num);
                break;
            case 'fillet': num = fillet(num); 
                break;
            default:
                break;
        }
        console.log(num);
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');