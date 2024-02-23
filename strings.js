let x = "This is a beautiful WORLD world world";
let y = "  Enjoy everyday  ";
let z = "Be grateful";
let a = "this is a ";

console.log (x.length);
console.log (x.charAt(2));
console.log (x.charCodeAt(0));
console.log (x.at(-2));
// in at() - we can use the negative index position
console.log(x[5]);

let slicex = x.slice(10,19);
console.log(slicex)

let substringx = x.substring(2); // takes -ve value as index 0
console.log (substringx);

let substrx = x.substr(-12 , 10);// 2nd parameter length of the extracted part
console.log (substrx);

console.log(x.toLocaleUpperCase());
console.log(x.toLowerCase());

console.log(x +" "+ y);
console.log(x.concat(y,z));

console.log(y.trim());
console.log(a.padStart(10, "i"));
console.log(a.padEnd(20,"beautiful"));

console.log(y.repeat(1));
console.log(x.replace(/world/g, "session"));// like replaceAll
console.log(x.replace(/world/gi, "globe"));// for case insensitive and global search

console.log(x.replaceAll(/world/gi,"lesson")); //case insensitive
console.log(x);
let xarray = x.split(" ");
//console.log(xarray[0]);

for(let i=0; i<= xarray.length; i++){

console.log(xarray[i]);

}
