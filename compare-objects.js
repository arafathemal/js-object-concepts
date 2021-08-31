const first = { a: 1, b: 3 };
const second = { a: 1, b: 4 };
// if (first == second) {
//     console.log('they are equal');
// }
// else {
//     console.log('they are not equal');
// }

function compareObject(obj1, obj2) {
   if(Object.keys(obj1).length !== Object.keys(obj2).length){
       return false;
   }
   for(const objects in obj1){
       if(obj1[objects] !== obj2[objects]){
           return false;
       }
   }
   return true;

}
const result = compareObject(first, second);
console.log(result)