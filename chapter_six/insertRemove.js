//serial: 043


var arr = [1, 2, 3, 4, 5, 6, 7, 8];


//array last insert number
arr.push(9);
console.log( 'Array push number is: ', arr);

//array last remove number
arr.pop(9);
console.log('Array pop number is: ', arr);

//array first insert number
arr.unshift(0);
console.log('Array first number insert: ', arr);

//array first remove number
arr.shift(0);
console.log('Array first number remove: ', arr);



arr.splice(3, 0, 9, 10);//first number is index number; 
                //second number is remove number
                //third number is insert element and koyta number insert korte cacchi 
console.log('Splice number is: ', arr);     


// arr[3] = undefined;
// console.log('Undefined number testing: ', arr);