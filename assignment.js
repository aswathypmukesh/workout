// no:2

// var a=10;
// var b=20;
// var sum = a+b;
// console.log(sum);

// no:3

// var p=20;
// var r=30;
// var n=3;
// var a=(p*r*n);
// var si=a/100;
// console.log(si);

// no:4

// var a =45;

// if (a < 50){
//     console.log(" Failed");      
//   }
// else{
//   console.log("Passed");      
// }

// no:5

// var a= 42;
//         if (a < 50){
//           console.log("Grade : Failed");      
//           } 
//           else if (a < 60){
//             console.log("Grade : E");      
//             } 
//         else if (a < 70) {
//                 console.log("Grade : D"); 
//                   } 
//         else if (a < 80) 
//              {
//                 console.log("Grade : C"); 
//         } else if (a < 90) {
//                 console.log("Grade : B"); 
//         } else if (a < 100) {
//                 console.log("Grade : A"); 
// }

// no:6

// var i = 3;
// var day;
//     switch (i) {
//         case 1:    
//           day = "Sunday";   
//           break;
//         case 2:
//           day = "Monday";
//           break;
//         case 3:
//           day = "Tuesday";
//           break;
//         case 4:
//           day = "Wednesday";
//           break;
//         case 5:
//           day = "Thursday";
//           break;
//         case 6:
//           day = "Friday";
//           break;
//         case 7:
//           day = "Saturday";
//         default:
//           day = "Invalid day";
//       }
// console.log(day);

// no:7

// var a = 5;
// var b;

// for (var i = 1; i <= 10; i++){
//     b= a*i
//     document.write("" + a + "*" + i + "=", + b +"<br>");
// }


// no:8

// var sum=0; 
// var i; 
// for(i=1;i<10;i=i+2) 
// {
//     sum=sum+i;
// }
// document.write(sum);

// no:9

// var n = 5; 
// var str = "";
// for (var i = 1; i <= n; i++) {
//   for (var j = 1; j <= i; j++) {
//     str = str + j;
//   }
//   str = str + "\n";
// }
// console.log(str);

// no:10

// const a = [ 10, 20, 30, 40, 50];
// const b = [15, 25, 35, 45, 55];
// const c= [a[0],a[1],a[2],a[3],a[4]];
// [a[0],a[1],a[2],a[3],a[4]] = [b[0],b[1],b[2],b[3],b[4]];
// [b[0],b[1],b[2],b[3],b[4]] = c;
// console.log(a);
// console.log(b);

// no:11

// const a = [11, 20, 34, 50, 33];
// var c=0;
// const even = a.filter(number => {
//   if(number % 2 === 0){
//     c=c+1;
//   }
// });
// console.log(c);

// using for loop

// const a = [11, 20, 34, 50, 33];
// var c=0;
// for(i=0;i<a.length;i++){
//   if(a[i] % 2===0){
//     c=c+1;
//   }  
// }
// console.log(c);

// no:12

// let num = [20, 10, 50, 30, 40];
// num.sort((a, b) => b - a);

// console.log(num);

// no:13

// function checkPalindrome(string) {
//   const arrayValues = string.split('');
//   const reverseArrayValues = arrayValues.reverse();
//   const reverseString = reverseArrayValues.join('');
//   if(string == reverseString) {
//       console.log('It is a palindrome');
//   }
//   else {
//       console.log('It is not a palindrome');
//   }
// }
// const string = prompt('Enter a string: ');
// checkPalindrome(string);

// no:14

var a = [1,2,3,4];
var b = [5,6,7,8];
var c = [];
  
  for (var i = 0; i < (a.length, b.length); i++) {
    c.push((a[i]) + (b[i]));
  }
  console.log(c);

// no:15


//  var a=['anu','appu'];

// function listNames(a){
//   a.forEach(function(name){ 
//     console.log( name);
//   });
// }
// listNames(a);

// no:16

// var n = 45;
// let isPrime = true;

//  if (n > 1) {

//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             isPrime = false;
//         }
//     }

//     if (isPrime) {
//         console.log(`${n} is a prime number`);
//     } else {
//         console.log(`${n} is a not prime number`);
//     }
// }

// no:17

// var a=2;
// var b=2;
// var result = 0;
// function addition(){
//     result = a + b;
//     console.log(result);
// }
// addition()
// function substraction(){
//   result = a - b;
//   console.log(result);

// }
// substraction()
// function multiplication(){
//   result = a * b;
//   console.log(result);
// }
// multiplication()
// function division(){
//   result = a / b;
//   console.log(result);
// }
// division()


// no:18

// function grade() {
//   var wt = 81;
//   var le = 68;
//   var as = 92; 
//   var per  = (81*70)/100 + (68*20)/100 + (92*10)/100;
//   var grade;
//   if (per>=35 && per<=60) {
//   grade = 'F';
//   } 
  
//   else if(per>=61 && per<=70){
//   grade = 'D';
//   }
  
//   else if(per>=71 && per<=80){
//   grade = 'C';
//   }
  
//   else if(per>=81 && per<=90){
//   grade = 'B';
//   }
  
//   else if(per>=91 && per<=100){
//   grade = 'A';
//   }
  
//   else{
//   grade = "Invalid or Failed";
//   }
//  console.log(grade);          
//   }
//   grade();


// no:19

// var p = 495000 ;
// var tax;
//   if (p<=250000) {
//     tax = 'no tax';
//     } 
    
//   else if(p>250000 && p<=500000) {
//     tax = (5/100)*p;
//     } 

//   else if(p>500000 && p<=1000000) {
//       tax = (20/100)*p;
//       }

//   else if(p>1000000 && p<=5000000) {
//         tax = (30/100)*p;
//         }

//   else{
//       tax = "not mention";
//       }
//   console.log(tax);    

// no:20

// let n = 4; 
// let str = "";
// let count = 1;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     str = str + count;
//     count =count+1;
//   }
//   str = str + "\n";
// }
// console.log(str);

// no:21

// var items = [1	,2	,3	,4	,5];
// function adjacentElementsProduct(items) {
//   var product = 0;
//   for (var i = 0; i < items.length - 1; i++) {
//       product =  items[i] * items[i + 1];
//       console.log(product) ;

//   }
// }
// adjacentElementsProduct(items);

// no:22

// var a = [1,2,3,4];
// var b = [5,6,7,8];
// var c = [];
// function sumArray(c) {
  
//   for (var i = 0; i < (a.length, b.length); i++) {
//     c.push((a[i]) + (b[i]));
//   }
//   console.log(c);
// }
// sumArray(c);

// no:23

// var a = []; 
// function getarray(){
//   for(var i=0; i<3; i++) {
//   a.push(prompt('Enter numbers ' + (i+1)));
// }
// }
// getarray();
// function displayarray(){
//     console.log(a);
// }
// displayarray();