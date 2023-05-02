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

// ?------------Switch statment--------------

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

// ?--------------While loop------------

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

// ?------------For loop-----------

// for(var num = 0; num <= 10;  num++){
//     console.log(num);
// }


 //* print 8 table

// var num= 0;
// var table=10;

//  for (num = 0; num < 11; num++) {
//     console.log(table +' * '+ num+ ' = '+ ( table*num) );
    
//  }
  
//? --------------function---------------

// function sum(){
//     var a=20, b=30;    // Defining a function
//     var total=a+b;
//     console.log(total)
// }

// sum()                  // calling a function

//*----------Anothr way----------------------

// function sum(a,b){           // a b are parameter
//     var total=a+b;
//     console.log(total)
// }

// sum();
// sum(23,34);
// sum(12,12)         

//*--------------function expression--------------

// function sum(a,b){
//     return total = a+b;
// }
// var funExp = sum(5,15);
// console.log(funExp);

//*----------------anonymous function-------------

// var funExp = function(a,b){
//     return total = a+b;
// }
// console.log(funExp(15,15));


//?---------------ECMA script---------------------

// *T--------------Template liternal----------------



//  for (let num = 0; num < 11; num++) {
//     let table = 8;
//     console.log( ' ${table} * ${num} = &{table * num}' );
    
//   }

//*------------ Default Parameters--------------------

// function mult(a,b){
//     return a*b;
// }
// console.log(mult(5,3));

//*--------------Fat arrow Function-----------------

// const sum = () => 'the sum of the two number is ${(a=3)+(b=5)}'
// console.log(sum());