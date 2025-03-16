function sortArrayBy2Criteria(data) {
    data.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
        // if (a.length !== b.length){
        //     return a.length - b.length;
        // }else {
        //     return a.localeCompare(b);
        // }
    }).forEach(x => console.log(x));
}
 
// let res = sortArrayBy2Criteria(['Isacc', 
// 'Theodor', 
// 'Jack', 
// 'Harrison', 
// 'George']);

// console.log(res);

sortArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);