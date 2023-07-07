let asyncIterable = {
    [Symbol.asyncIterator]() {
        let i = 0;
        return {
            next() {
                if (i < 5) {
                    return Promise.resolve({ 
                        value: i++, 
                        done: false 
                    });
                } else {
                    return Promise.resolve({ 
                        done: true 
                    });
                }
            }
        };
    }
};

let asyncIterator = asyncIterable[Symbol.asyncIterator]();
// console.log(asyncIterator.next());

(async function() {
    // let result = await asyncIterator.next();
    // console.log(result);
    console.log(await asyncIterator.next());
    console.log(await asyncIterator.next());
    console.log(await asyncIterator.next());
    console.log(await asyncIterator.next());
    console.log(await asyncIterator.next());
    console.log(await asyncIterator.next());
})();
