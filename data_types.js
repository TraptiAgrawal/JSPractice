var x = new String("fff");
var y = String("jjj");
console.log( 
  typeof "john" + "\n" +    // string
  typeof 3.14 + "\n" +     // number
  typeof NaN + "\n" +   // number
  typeof true + "\n" +   // boolean
  typeof [1,2,3,4] + "\n" +  //object - array is an object
  typeof {name:'john', age:34} + "\n" +  // object
  typeof new Date() + "\n" +  //object
  typeof function () {} + "\n" + // function
  typeof myCar + "\n" + // undefined
  typeof null + "\n" + //object
  typeof x + "\n" + //object - created using new
  typeof y  // string - primitive
);
var d = 15 / 0;
console.log(d);
console.log("isNan = " + isNaN(0/0));
console.log("isNan = " + Number.NaN);

// you can set prop for objects but not primitives
var strPrimitive = String('word');
strPrimitive.prop = "bar";
console.log(strPrimitive.prop); // undefined

var strObject = new String('word');
strObject.prop = "bar";
console.log(strObject.prop); // bar


