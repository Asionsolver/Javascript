function changeToInt(v) {
    let result = Number.parseInt(v);
    if (!result) {
        return "Please provide a value which can be converted to integer.";
    }
    return result;
}

console.log(changeToInt("54.5897"));
