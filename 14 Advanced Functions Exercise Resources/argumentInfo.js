function argumentInfo() {

    const params = (Array.from(arguments));
    const types = {};

    for (let param of params) {
        const type = typeof param;
        console.log(`${type}: ${param}`);

        if (types[type] == undefined) {
            types[type] = 0;
        }
        types[type]++;
    }
    const result = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (let [type, count] of result) {
        console.log(`${type} = ${count}`);
    }


    // solution 2:
    // let result = {};

    // Array.from(arguments).forEach(arg => {
    //     let type = typeof arg;
    //     console.log(`${type}: ${arg}`);

    //     if (!result[type]) {
    //         result[type] = 0
    //     }
    //     result[type]++;
    // });

    // Object.keys(result)
    //     .sort((a, b) => result[b] - result[a])
    //     .forEach((key) => console.log(`${key} = ${result[key]}`));
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });
