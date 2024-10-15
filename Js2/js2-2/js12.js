const nums1 = [1, 2, 3, 4, 5, 6, 7];
const nums2 = [7, 8, 9, 10, 11, 12, 13, 14];
const numNew = [...nums1, ...nums2].sort((a,b) => a-b);
let sum = 0;
let midIndex = Math.floor(numNew.length / 2);
for (let i = 0; i < numNew.length - 1; i++) {
  sum = numNew[midIndex] + numNew[midIndex - 1];
}
console.log(numNew);
console.log(sum/2);
