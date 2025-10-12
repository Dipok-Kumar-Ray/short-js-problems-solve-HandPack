//Nullish Coalescing Operator create by Null and Undefined.
//Nullish Operator er left side ee jodi Null or Undefined hoy tahole Right side Execute hobe

const foo = null ?? "default string";
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0
