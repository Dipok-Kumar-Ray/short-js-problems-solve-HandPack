//serial: 055

var obj1 = {
    a: 10, 
    b:20
}

var obj2 = {
    a:10,
    b: 20
}


if(obj1.a === obj2.b && obj1.b === obj2.a){
    console.log(true)
}

else{
    console.log(false)
}

console.log(obj1);

console.log(JSON.stringify(obj1));