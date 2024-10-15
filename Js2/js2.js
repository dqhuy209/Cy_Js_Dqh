// Bai 1
// const nestedArray = [1, [2, [3, [4, 5,6,7,8,9]]]];
// const newArr = nestedArray.flat(Infinity)
// console.log(newArr)

// Bai 2
// const objects ={
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   hobbies: ['reading', 'painting', 'swimming']
// }

// let cloneObject = {};
// for (let key in objects) {
//   cloneObject[key] = objects[key];
// }

// console.log(objects)
// console.log(cloneObject)

// Bai 3
// const matrix = [
//   [1,2,3],
//   [4,5,6],
//   [9,10,11]
// ]
// matrix.reverse()
// let matrixLength = matrix[0].length;
// let arr=[]
// for(let i=0; i<matrixLength; i++){
//   for(let j =0; j<matrix.length;j++){
//     arr.push(matrix[j][i])
//   }
// }
// let arrNew = []
// for(let i=0; i<arr.length;i+=3){
//   const chunk = arr.slice(i,i+3);
//   arrNew.push(chunk)
// }
// console.log(arrNew)

// Bai 4
// const string = `Tập đoàn Hyosung (Hàn Quốc) dự kiến đầu tư thêm 4 tỷ USD, nâng tổng số vốn rót vào Việt Nam lên gấp đôi.
// Tại cuộc gặp Thủ tướng Phạm Minh Chính chiều 14/10, ông Cho Hyun-joon, Chủ tịch Tập đoàn Hyosung (Hàn Quốc), khẳng định môi trường đầu tư của Việt Nam rất đáng tin cậy. Ông tin rằng Việt Nam sẽ trở thành trung tâm sản xuất của châu Á.`

// const arr = string.split(" ")
// let longString = arr[0]
// for(let i = 1; i < arr.length; i++){
//   if(arr[i].length >longString.length){
//     longString = arr[i];
//   }
// }
// console.log(longString)



