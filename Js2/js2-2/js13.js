function checkNumberPalindrome (num) {
  let rev = num.toString().split('').reverse().join('');
  if(rev == num){
    return true;
  }
  return false;
}

console.log(checkNumberPalindrome(122)); //
