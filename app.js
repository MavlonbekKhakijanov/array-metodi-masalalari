// UY ISHLARI

// 1-masala
// let input = 5;
// function getLevel2(n) {
//   let output = [];
//   for (let i = 1; i <= n; i++) {
//     output.push(2 ** i);
//   }
//   return output;
// }
// console.log(getLevel2(input));

// 2-masala
// function generateSeries(n, A, B) {
//   if (n > 3) {
//     let sum = [A, B];
//     for (let i = 2; i < n; i++) {
//       let counter = sum.reduce((A, B) => A + B , 0);
//       sum.push(counter);
//     }
//     return sum;
//   }
// }

// const n = 5;
// const A = 2;
// const B = 3;
// const result = generateSeries(n, A, B);

// console.log(result); // [2, 3, 5, 10, 20]

// 3-masala;
// let arr = [1, 2, 3, 4];
// console.log(arr.reverse());

// 4-masala
// let numbers = [4, 5, 7, 8, 6, 9];
// let newNumbers = [];
// const oddNumbers = function (arr) {
//   arr.forEach((n) => {
//     if (!(n % 2 == 0)) {
//       newNumbers.push(n);
//     }
//   });
//   return newNumbers;
// };

// console.log(`${oddNumbers(numbers)} toqlar soni  ${newNumbers.length} ta`);

// 5-masala;
// let arr = [4, 5, 7, 8, 6, 9];
// let juftArr = [];
// let toqArr = [];

// arr.forEach((element) => {
//   if (element % 2 === 0) {
//     juftArr.push(element);
//   } else {
//     toqArr.unshift(element);
//   }

// });
// console.log(juftArr.concat(toqArr));

// 6-masala
// let arr = ["m", "a", "v", "l", "o", "n"];
// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }

// 7-masala
// let arr = ["m", "a", "v", "l", "o", "n"];
// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[arr.length - 1 - i]);
// }

// 8-masala;
// let arr = [0, 1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i += 2) {
//   console.log(`juft indexslar: ${arr[i]}`);
// }
// for (let i = 1; i < arr.length; i += 2) {
//   console.log(`toq indexslar: ${arr[i]}`);
// }

// 9-masala
// let arr = [0, 1, 2, 3, 4, 5];

// const getEvenOddArray = (el) => {
//   let juft = el.filter((item) => item % 2 === 0);
//   let toq = el.filter((item) => item % 2 !== 0).reverse();
//   console.log(toq);
//   return juft;
// };

// console.log(getEvenOddArray(arr));

// 10-masala;
// function alternateArray(arr) {
//   let result = [];
//   let n = arr.length;

//   for (let i = 0; i < n / 2; i += 2) {
//     result.push(arr[i], arr[i + 1], arr[n - 1 - i], arr[n - 2 - i]);
//   }

//   return result;
// }
// let inputArray = [4, 5, 7, 8, 6, 9];
// let outputArray = alternateArray(inputArray);

// console.log(outputArray);

// 11-masala
// let inputArray = [5, 2, 3, 4, 5, 6, 7, 8];
// const sumCounter = function (arr, K, L) {
//   arr.splice(K, L - K);

//   return arr.reduce((acc, current) => acc + current, 0);
// };
// console.log(sumCounter(inputArray, 3, 6));

// 12-masala;
// const input = [10, false, "", "Abdulaziz", null, true];
// let thruty = input.filter((arr) => Boolean(arr) == true);
// let falcy = input.filter((arr) => Boolean(arr) != true);

// console.log(thruty);
// console.log(falcy);

// 13-masala

// let inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
// const getOddMin = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     newArr.push(arr[i]);
//   }
//   return Math.min(...newArr);
// };

// console.log(getOddMin(inputArray));

// 14-masala
// let inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
// const getOddMin = (arr) => {
//   let newArr = [];
//   for (let i = 1; i < arr.length; i += 2) {
//     newArr.push(arr[i]);
//   }
//   return Math.max(...newArr);
// };

// console.log(getOddMin(inputArray));

// 15-masala
// let arr = [10, 12, 11, 6, 8, 7, 13, 15, 16];
// const findLastLocalMaximum = (data) => {
//   let n = data.length;
//   let lastLocalMaximumIndex = -1;
//   if (n < 3) {
//     console.log(-1);
//   }
//   for (let i = 1; i < data.length - 1; i++) {
//     if (data[i] > data[i - 1] && data[i] > data[i + 1]) {
//       lastLocalMaximumIndex = i;
//     }
//   }
//   return lastLocalMaximumIndex;
// };
// console.log("oxirgi local max index", findLastLocalMaximum(arr));
