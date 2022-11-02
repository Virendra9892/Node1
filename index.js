const app = require("./app");
console.log(app);
console.log(app.Name);
console.log(app.y);

let arr = [1,2,3,4,5,6,7,8,3];
let array1 = arr.filter((item)=>{
    return item>=3;
});
console.log(array1);