function solve(nameList) {
    let sorted = nameList.sort((a, b) => a.localeCompare(b));
    let counter = 0;
    sorted.forEach(element => {
        counter++;
        console.log(`${counter}.${element}`);
    });
}
solve(["John", "Bob", "Christina", "Ema"]);
