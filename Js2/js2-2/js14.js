const strs = ["flower", "flow", "flight"]
const strs1 = ["dog", "racecar", "car"]

function longestPrefix (str) {
  for(let i = 0; i < str[0].length; i++) {
    let char = str[0][i];
    for(let j = 1; j < str.length; j++) {
      if(i>=str[j].length || str[j][i] !== char){
        return str[0].slice(0,i)
      }
    }
  }
  return str[0]
}

console.log(longestPrefix(strs));