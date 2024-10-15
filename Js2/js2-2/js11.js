
function count(n) {
  let count = n; 

  return function(array) {
      const result = []; 
      for (let i = 0; i < array.length; i++) { 
          result.push(count++); 
      }
      return result;
  };
}


const n = count(10);
const result = n(["arr", "arr", "arr", "arr", "arr"]);
console.log(result); 
