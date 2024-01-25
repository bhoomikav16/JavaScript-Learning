const letters = new Set(["a","b","c"]);
const b =letters.add("7");
letters.add(77)
letters.add("a")
// console.log(letter)


// console.log(letters.delete("a"));
// console.log(letters.has("b"));
// letters.forEach(value => {
//     console.log(value)});
    
const allValues = getAllIterationValues();

function getAllIterationValues() {
    let allValues = [];
    letters.forEach(value => {
        allValues.push(value);
    });
    return allValues;
}
        // console.log('value', bv.value)
//     // let bv=value();
