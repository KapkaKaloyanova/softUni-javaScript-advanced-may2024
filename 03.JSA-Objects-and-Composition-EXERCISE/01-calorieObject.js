function calorieObject(data) {
    let result = {};
    for (let i = 0; i < data.length; i += 2) {
        let key = data[i];
        let value = Number(data[i + 1]);
        result[key] = value;

    }
    console.log(result);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])

//s reduce ???
//function solve(arr) {
//  return arr.reduce((acc,curr,index) => {
 
//     if(index%2===0) acc[curr]= Number(arr[index+1])
//     return acc;
     
//      },{}) 
     
//     }