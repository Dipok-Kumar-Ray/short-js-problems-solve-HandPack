// serial: 044


var arr = [2, 3, 4, 5, 6, 7, 9];

for(var i = 0; i < arr.length; i++){
    // console.log(arr[i])
    arr[i] = arr[i] + 2;
}

// console.log(arr);


// array of sumission number
var sum = 0;
for(var i = 0; i < arr.length; i++){
    sum += arr[i]
}
console.log( 'array of sumission number is:', sum);


//sum of array in EVEN number
var sum = 0;
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0)
        sum += arr[i];
}
console.log( 'sum of array in EVEN number is:', sum)


// array of even number
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0)
        console.log('Even number is :', arr[i]);
}


//array of ODD number
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 1){
        console.log('Odd number is:', arr[i]);
    }
}

//sumission of ODD number 
var sum = 0;
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 1)       
        sum += arr[i];
}
console.log('sumission of ODD number is:', sum);




