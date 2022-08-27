//Bài 1*

// function conghaiso() {
//   let a = Number(prompt("Enter a"));
//   let b = Number(prompt("Enter b"));
//   let sum = "";
//   sum = a + b;
//   console.log(sum);
//   return;
// }
// conghaiso();

//Bài 2*

// function tongle() {
//   let array = [1, 2, 3, 4, 5, 6, 7];
//   let a = 0;
//   for (i = 0; i <= array.length - 1; i++) {
//     if (array[i] % 2 === 1) {
//       a = a + array[i];
//     }
//   }
//   console.log(a);
//   return;
// }
// tongle();

//Bài 1
// function binhphuong() {
//   let a = Number(prompt("Enter a"));
//   let square = a * a;
//   console.log(square);
//   return;
// }
// binhphuong();

//Bài 2
// function round() {
//   let r = Number(prompt("Enter Raidus"));
//   let s = Math.PI * r * r;
//   let c = 2 * Math.PI * r;
//   console.log(`C: ${c}`);
//   console.log(`S: ${s}`);
//   return;
// }
// round();

//Bài 3
// function giaithua() {
//   let giaithua = Number(prompt("Enter number"));
//   let g = 1;
//   if (giaithua == 0) {
//     console.log(1);
//   } else if (giaithua > 0) {
//     for (let i = 1; i <= giaithua; i = i + 1) {
//       g = g * i;
//     }
//     console.log(g);
//   } else {
//     console.log("invalid number");
//   }
// }
// giaithua();

//Bài 4

// function check() {
//   let check = +prompt("Enter Input");
//   if (isNaN(check)) {
//     console.log("false");
//   } else {
//     console.log("true");
//   }
// }
// check();

//Bài 5
// function min (){
//     let a = Number(prompt("nhập số nguyên a"));
//     let b = Number(prompt("nhập số nguyên b"));
//     let c = Number(prompt("nhập số nguyên c"));
//     condition=Number.isInteger(a) && Number.isInteger && Number.isInteger(c)
//     if (a <= b && a <= c && condition ) {
//         alert(" a là số nhỏ nhất")
//     }
//     else if (b<= a && b<= c && condition){
//         alert("b là số nhỏ nhất")
//     }
//     else if (c <= a && c <= b &&condition) {
//         alert("c là số nhỏ nhất")
//     }
//     else{
//         alert("số nhập ko hợp lệ")
//     };
//     return;
// };
// min();
//Bài 6

// function nguyenduong() {
//   let nd = Number(prompt("Enter a number"));
//   if (nd % 1 == 0) {
//     if (nd > 0) {
//       console.log("this number is positive integer");
//     } else if (nd == 0) {
//       console.log("Not positive and negative");
//     } else {
//       console.log("This is negative integer");
//     }
//   } else {
//     console.log("This is not integer");
//   }
// }
// nguyenduong();

//Bài 7 - đổi chỗ 2 biến cho nhau
// let a = Number(prompt("Enter a"));
// let b = Number(prompt("Enter b"));
// console.log(a);
// console.log(b);
// function changeposition(a, b) {
//   temp = a;
//   a = b;
//   b = temp;
//   console.log(a);
//   console.log(b);
//   return;
// }
// changeposition(a, b);

//Bài 8
// function daonguoc(){
//     let arr = prompt("Nhập vào các số nguyên cách nhau bởi dấu cách").split(" ");
//     let newarr = [];
//     for (i = arr.length -1 ; i >= 0; i--){
//         newarr.push(arr[i]);
//     };
//     console.log(newarr);
//     return;
// };
// daonguoc();

//Bài 9
// function kytu (){
//     let a = 0;
//     let arr = prompt("Nhập vào mảng kí tự ").split("");
//     let array = prompt("Nhập vào kí tự cần kiểm tra");
//     if ( arr.indexOf(array) == -1){
//         alert("từ này chưa có");
//     }
//     else {
//         for (let i=0; i<arr.length; i++){
//             if((arr[i] == array)){
//                 a = a +1
//             }
//         };
//     };
//     console.log(`Từ này xuất hiện ${a} lần `);
//     return;
// };
// kytu();
