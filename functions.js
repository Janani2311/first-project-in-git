//this is a day2_project


function myfunction(a , b) {
    let result = a * b;
    return result;
 }

 let result = myfunction(1,2) * 10;
 console.log(result);

 // Anonymous function
 const m = function(age) {
    let p =  age > 18 ? "valid" : "not valid" ; 
    return p;
 }

 let x = m(20); 
 console.log("you are" +" " + x);
 console.log(m(14)); // invoked using variable name

 console.log(typeof m);
 let changem = m.toString();
 console.log(typeof changem);

 //arrow function

 const arrow = (a = "fine",b = "entry") => console.log(a + " "+ b);
 arrow();

 //self invoking function

 (function(){
    console.log("hi customer");
 })();

 // Rest parameter
 function max(...args) {
    let max = 0;
    for (let arg of args) {
           if(arg > max){
            max = arg;
            console.log(max);
           }
    }
    return max;
 }

 let maxValue = max(2 , 7 , 6 , 5 , 3 , 8);
 console.log(maxValue);

 // arguments - default bulit in object
 function min(){
    let min = Infinity;
    console.log(arguments.length);
    for (let i=0 ; i < arguments.length; i++ ) {
        if (arguments[i] < min) {
            console.log(arguments[i]);
            min = arguments[i];
        }
    }
    return min;
 }

 let minValue = min(2, 8 , 6 , 1 , 9);
 console.log(minValue);

 //function as a method of an object
 const person = {
   name : "Janani",
   address: "Erode",
   eligible: function() {
      console.log(this.address);
      if (this.address == "Erode") {
         console.log(this.name +" "+"is eligible for shipping");
      }else {
         console.log(this.name+ " "+ "is are not eligible");
      }
   }
};

person.eligible();