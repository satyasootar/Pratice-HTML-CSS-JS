// var _1myAge = '18'
// console.log(_1myAge)
// console.log(typeof(_1myAge))

// var myAge = true;
// console.log(myAge);
// console.log(typeof(myAge)); 

// console.log(3**3);
// console.log(5+7);

// var ant = 14
// var int = 17;
// if(ant > int){
//     console.log('it is Greater')
// }else{
//     console.log('it is smaller')
// }


//? ---------------leap year------------------

// var year = 2020

// if(year % 4 === 0){
//    if(year % 100 === 0){
//       if(year % 400 === 0){
//         console.log('The year' + year + 'is a leap year')
//       }else{
//         console.log('The year' + year + 'is not a leap year')
//       }
//   } else{
//     console.log('The year ' + year + ' is a leap year')
//   } 
//     console.log('The year ' + year + ' is a leap year')
// }else{
//     console.log('The year ' + year + ' is not a leap year')
// }

//&
//? --------------Ternary operator------------------

// var age = 17;
// console.log((age >= 18)? 'you can vote' : 'you cant vote');

// ?------------Switch statment---------------------
// var area = 'Triangle';
// var PI = 3.14, l=5, b=4, r=3;

// switch(area){
//     case 'circle':
//         console.log("the area of the circle is : " + PI*r**2);
//     break;
//     case 'Triangle':
//         console.log("the area of the Triangle is : " + l*b/2);
//         break;
//         case 'Rectangle':
//             console.log("the area of the Rectangle is : " + l*b);
//          break;  

//         default:
//             console.log("Please enter a valid Data") 

// }

// ?--------------While loop--------------------

// var num = 0;
// block scope
// while(num <= 10){
//     console.log(num);
//     num++;
// }

//? Do while loop

// var num=20;             //It will give an output
// do{                       //then check the condition
//     console.log(num);
//     num++;
// }while( num <= 10);

// ?------------For loop-------------------------

// for(var num = 0; num <= 10;  num++){
//     console.log(num);
// }


//* print 8 table

// var num= 0;
// var table=10;

//  for (num = 0; num < 11; num++) {
//     console.log(table +' * '+ num+ ' = '+ ( table*num) );

//  }

//? --------------function-------------------------

// function sum(){
//     var a=20, b=30;    // Defining a function
//     var total=a+b;
//     console.log(total)
// }

// sum()                  // calling a function

//*----------Anothr way-----------------------------

// function sum(a,b){           // a b are parameter
//     var total=a+b;
//     console.log(total)
// }

// sum();
// sum(23,34);
// sum(12,12)         

//*--------------function expression----------------

// function sum(a,b){
//     return total = a+b;
// }
// var funExp = sum(5,15);
// console.log(funExp);

//*----------------anonymous function---------------

// var funExp = function(a,b){
//     return total = a+b;
// }
// console.log(funExp(15,15));


//?---------------ECMA script-----------------------

// *T--------------Template liternal----------------



//  for (let num = 0; num < 11; num++) {
//     let table = 8;
//     console.log( ` ${table} * ${num} = ${table * num}` );

//   }

//*------------ Default Parameters------------------

// function mult(a,b){
//     return a*b;
// }
// console.log(mult(5,3));

//*--------------Fat arrow Function-----------------

// const sum = () => `the sum of the two number is ${(a=3)+(b=5)}`
// console.log(sum());

//?----------------Array---------------------------- 

// var Names = ['satya', 'omm', 'pokemon']; 

//*!---------------Traversal-------------------------

// var Names = ['satya', 'omm', 'pokemon'];
// console.log(Names[Names.length-1]);

// console.log(Names.length);

//*------------------For loop--------------------

// var Names = ['satya', 'omm', 'pokemon'];

// for( var num=0;num < Names.length; num++){
//     console.log(Names[num]);  
// }

//*---------------For in loop--------------------

//var Names = ['satya', 'omm', 'pokemon'];

// for(let elements in Names){   //Return index number
//     console.log(elements)
// }

//*---------------For of loop--------------------
// var Names = ['satya', 'omm', 'pokemon'];

// for(let elements of Names){
//     console.log(elements)
// }

//*---------------ForEach loop--------------------


// var Names = ['satya', 'omm', 'pokemon'];
// Names.forEach(function(element ,index, array){
//       console.log(element + "index : " + index + " " + array)
// })


//!---------------Searching and Filter in an Arrey-----

//video was not working


//!--------------CURD-----------------------------
//*push---Add items in the last
// const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.push("chicken")
// console.log(animals);
// console.log(count);

//*unshift---Add items in the First

// const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.unshift("chicken")
// console.log(animals);
// console.log(count);

//*pop---Remove items in the last

// const animals = ['pigs', 'goats', 'sheep'];

// console.log(animals);
// console.log(animals.pop());
// console.log(animals);

//*shift-----Remove items from the first

// const animals = ['pigs', 'goats', 'sheep'];

// console.log(animals);
// console.log(animals.shift());
// console.log(animals);

//*Pratice===============

// const months = ['jan', 'march', 'April', 'June', 'July'];

//1.
// const Newmonths = months.splice(months.length,0,"Dec");
// console.log(months);

//2.
// console.log(Newmonths);

//3.
// const Newmonth = months.splice(1,1,'march');

// const indexOfMonth = months.indexOf('march')

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1,'March')
//     console.log(months)
// }else{
//     console.log('No such data found')
// }

//* MAp----------

// const array = [1, 4, 9, 16, 25];

// let newArr = array.map((curElem,index,arr) =>{
//     return curElem > 9;
// })
// console.log(array);
// console.log(newArr);


//?Pratice=================================

//1...


// let arr = [25, 36, 49, 64];

// let arrSqr = arr.map((u, Omm, silu) => {
//     console.log("u: ", u);
//     console.log("Omm: ", Omm);
//     console.log("silu: ", silu);

//     return Math.sqrt(u) * Omm;
// })
// console.log(arrSqr);

//2...
// let arr = [2, 3, 4, 6, 8];

// let arr2 = arr.map((curElem) => {
//     return curElem * 2;

// }).filter((curElem) => {
//     return curElem > 10;

// })
// console.log(arr2);


// let arr = [5, 6, 7];
// let sum = arr.reduce((accumulator, curElem, index , arr) =>{
//      return accumulator += curElem;

// })
// console.log(sum);


//!---------------String-------------------------------

// let myname = 'satya';
// console.log(myname)

//?------------Escape character-----------------------


// let anysentence = "we are so called \"Vikings\" from the north."
// console.log(anysentence)


//or============


// let anysentence = 'we are so called \"Vikings\" from the north.'
// console.log(anysentence)


//?--------Extracting String part---------------------

//*-------slice method----------------

//1.Display only 280 character of a string like the one used in Twitter?

// let myTweet = "saya jiisi iojopd ioje ocowic ocjwsc copwejfwpodc ciowejckmw jcowejdwej cnwjecowem jowejcwemc jwejcwem jwejcopwe j0woejcowej omncwej cjewpokcpw jcweokcpweo oijiowe saya jiisi iojopd ioje ocowic ocjwsc copwejfwpodc ciowejckmw jcowejdwej cnwjecowem jowejcwemc jwejcwem jwejcopwe j0woejcowej omncwej cjewpokcpw jcweokcpweo oijiowe saya jiisi iojopd ioje ocowic ocjwsc copwejfwpodc ciowejckmw jcowejdwej cnwjecowem jowejcwemc jwejcwem jwejcopwe j0woejcowej omncwej cjewpokcpw jcweokcpweo oijiowe saya jiisi iojopd ioje ocowic ocjwsc copwejfwpodc ciowejckmw jcowejdwej cnwjecowem jowejcwemc jwejcwem jwejcopwe j0woejcowej omncwej cjewpokcpw jcweokcpweo oijiowe saya jiisi iojopd ioje ocowic ocjwsc copwejfwpodc ciowejckmw jcowejdwej cnwjecowem jowejcwemc jwejcwem jwejcopwe j0woejcowej omncwej cjewpokcpw jcweokcpweo oijiowe saya jiisi iojopd ioje ocowic ocjwsc copwejfwpodc ciowejckmw jcowejdwej cnwjecowem jowejcwemc jwejcwem jwejcopwe j0woejcowej omncwej cjewpokcpw jcweokcpweo oijio"

// let MyActualTweet = myTweet.slice(0, 280);
// console.log(MyActualTweet)
// console.log(MyActualTweet.length);


//*----------NewDate()--------------------------

//let currDate = new Date()
//console.log(new Date().toLocaleString());


//*============Dom==============================

// ************** DOM vs BOM *******************

// 👉 The DOM is the Document Object Model, which deals with the document, 
// the HTML elements themselves, e.g. document and all traversal you 
// would do in it, events, etc.

// For Ex: 👨‍🏫
// change the background color to red
// document.body.style.background = "red";


// 👉 The BOM is the Browser Object Model, which deals with browser components 
// aside from the document, like history, location, navigator and screen 
// (as well as some others that vary by browser). OR 
// In simple meaning all the Window operations which comes under BOM are performed 
// usign BOM 



// Functions alert/confirm/prompt are also a part of BOM: 
// they are directly not related to the document, 
// but represent pure browser methods of communicating with the user.

// alert(location.href); // shows current URL
// if (confirm("Want to Visit ThapaTechnical?")) {
//   location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
// }



// Section 3️⃣: Navigate through the DOM 

// 1: document.documentElement
      // returns the Element that is the root element of the document. 
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (include tab,enter and whiteSpace)
  // list of the direct children only 
// 5: document.children (without text nodes, only regular Elements)
// 6: document.childNodes.length

// 👉 Practice Time 
// How to check whether an element has child nodes or not?
// we will use hasChildNodes()

// 👉 Practice Time 
// How to find the child in DOM tree 
// firstChild vs firstElementChild
// lastChild vs lastElementChild 
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs 
// document.querySelector(".child-two").style.color = "yellow";

// 👉 How to find the Parent Nodes 
// document.body.parentNode
// document.body.parentElement

// 👉 How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling






