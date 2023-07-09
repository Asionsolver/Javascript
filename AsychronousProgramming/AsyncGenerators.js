async function* asyncGenerator() {
    let i = 0;
    while (true) {
        if (i > 5) {
            return;
        }
        yield await Promise.resolve(i++);
    }
}

(async function() {
    for await (let num of asyncGenerator()) {
        console.log(num);
    }
})();