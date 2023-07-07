// function makeWords(text) {
//     let str = text.trim();
//     let words = str.split(' ');
//     return words;
// }


function makeWords(text) {
    try{
        let str = text.trim();
        let words = str.split(' ');
        return words;
    }
    catch(err){
        // console.log(err);
        // console.log(err.message);
        return "Please provide a valid value for text.";
    }
}


// let word = makeWords("               I love Javascript              ");
// let word = makeWords('9666');
let word = makeWords(9666);
console.log(word);