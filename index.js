// // 1 //
// function isNumberPrime(n){
//   if(n <= 1) return false;
//   for(let i = 2; i < n; i++){
//     if(n % i === 0) return false;
//   }
//   return true;
// }
// function isNumberPerfect(n){
//   if(n <= 1) return false;
//   let sum=0;
//   for(let i=0;i<n;i++){
//     if(n % i === 0) sum+=i;
//   }
//   return sum === n;
// }
// function checkNumber(n){
//   if(isNumberPrime(n)){
//     console.log(n+' Là số nguyên tố')
//   }else{
//     console.log(n+ 'Không phải là số nguyên tố')
//   }
//   if(isNumberPerfect(n)){
//     console.log(n+ ' Là số hoàn hảo')
//   }else{
//     console.log(n+ 'Không phải là số hoàn hảo')
//   }
// }

// checkNumber(6) ;

// // 2 //
// Thuật toán nổi bọt => so sánh 2 số rồi đổi chỗ cho nhau
// const arr=[10, 2,3,2,5]
// function bubbleSortIncrease(arr){
//   let len = arr.length;
//   for(let i = 0; i < len - 1; i++){
//     for(let j = 0; j < len - 1 - i; j++){
//       if(arr[j] > arr[j+1]){
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSortIncrease(arr))
// function bubleSortDecrease(arr){
//   let len = arr.length;
//   for(let i = 0; i < len - 1; i++){
//     for(let j = 0; j < len - 1 - i; j++){
//       if(arr[j] < arr[j+1]){
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubleSortDecrease(arr))

// 3//
// Đảo ngược chuỗi
// Tách chuỗi -> đảo ngược mảng -> gộp mảng
//   let rawStr = "Hello CY VietNam";
// function reverseString(str){
//   let arr = str.split("");
//   arr.reverse();
//   return arr.join("");
// }
// console.log(reverseString(rawStr));

// 4 //
// Kiểm tra dấu '@' và '.'
// Không được ở đầu và cuối
// Không được có khoảng trắng
// Check sau dấu @ '@' và '.'

// function validateEmail(email) {
//   const atIndex = email.indexOf("@");
//   // Tìm dấu . cuối cùng
//   const dotIndex = email.lastIndexOf(".");
//   // Có @ hay ko và kp đầu hoặc cuối
//   if (atIndex <= 0 || atIndex === email.length - 1) {
//     return false;
//   }
//   // Có . hay ko và sau @
//   if (dotIndex <= atIndex + 1 || dotIndex === email.length - 1) {
//     return false;
//   }
//   // Khoảng trắng
//   if (email.includes(" ")) {
//     return false;
//   }
//   // Sau dấu . ít nhất phải có 2 ký tự
//   const afterDot = email.slice(dotIndex + 1);
//   if (afterDot.length < 2) {
//     return false;
//   }
//   return true;
// }
// let email1 = "example@example.com";
// let email2 = "invalid-email@.com";
// let email3 = "noatsymbol.com";
// let email4 = "example@domain.c";

// console.log(validateEmail(email1));
// console.log(validateEmail(email2));
// console.log(validateEmail(email3));
// console.log(validateEmail(email4));

// 5 //
// Loại bỏ các ký tự đặc biệt -> replace
// Xử lý không xuất hiện nhiều hơn 2 dấu space
// ko xuất hiện space ở đầu và cuối
// // 
// function stringClean(input){
//   const string = input.replace(/[@#!{}[\]()]/g, '')
//   return string.trim().replace(/\s+/g, ' ');
  
// }
// // Hàm nhận chuỗi đã xử lý 
// // Trả ra mảng các từ viết hoa chữ cái đầu và sắp xếp ngược
// function upercaseString(input){
//   return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
// }
// // Xử lý và đảo ngược
// function processString(input){
//   // Clean
//   let string =stringClean(input)
//   // Rỗng => mảng rỗng
//   if(string===''){
//     return []
//   }
//   // Chia chuỗi thành mảng
//   let arrWord = string.split(' ')
//   // Viết hoa chữ cái đầu và đảo ngược
//   let capitalizedWords = arrWord.map(word => upercaseString(word)).reverse();

//   return capitalizedWords;
// }
// console.log(processString("")); 
// console.log(processString("Xin chào  Cy")); 
// console.log(processString("Xin chào @CYer")); 
// console.log(processString(" Xin c{h}ào #Tech@!Cy(VN)   "));

// // Hàm tính giá trị trung bình của các số trong chuỗi đã xử lý
// function averageOfNumbers(str) {
//     let cleanedStr = stringClean(str);

//     let wordsArray = cleanedStr.split(' ');

//     // Lọc ra những từ chứa toàn bộ là số
//     let numbers = wordsArray.filter(word => !isNaN(word) && word !== '').map(Number);

//     if (numbers.length === 0) {
//         return 0;
//     }

//     // Tính trung bình các số
//     let total = numbers.reduce((sum, num) => sum + num, 0);
//     let average = total / numbers.length;

//     // Chỉ lấy 1 chữ số sau dấu phẩy
//     return parseFloat(average.toFixed(1));
// }

// console.log(averageOfNumbers("")); 
// console.log(averageOfNumbers("Xin chào  Cy")); 
// console.log(averageOfNumbers("Xin chào 123456 @Cy")); 
// console.log(averageOfNumbers(" Xin 20 c{h}ào 60  #Cy30@!Tech(VN)  100 ")); 

let arr = [
  {
  brand: 'Huyndai',
  model: 'Santafe'
  }, {
  brand: 'Huyndai',
  model: ' Sonata'
  }, {
  brand: 'Vinfast',
  model: 'Lux SA'
  }, {
  brand: 'Toyota',
  model: 'Camry'
  }, {
  brand: 'Vinfast',
  model: 'Lux A'
  }, {
  brand: 'Toyota',
  model: 'Vios'
  }
]
function mergeByBrand(arr) {
  let groupedByBrand = {};

  arr.forEach(e => {
      if (groupedByBrand[e.brand]) {
          groupedByBrand[e.brand].push(e);
      } else {
          groupedByBrand[e.brand] = [e];
      }
  });

  return Object.values(groupedByBrand);
}

console.log(mergeByBrand(arr));
