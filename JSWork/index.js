let a=1;
let b=9;
console.log(typeof b);

// if(a==b){
//     console.log("Hello");
// }else{
//     console.log("JAVA");
// }
// let d=function (str="Hello"){
//     console.log("hi"+str);
// }
// d("lol");

// function sum(a,b,c=12){
//     return a+b+c;
// }
// let total = sum(23,45)
// console.log(total)



// function selectlang(){
//     if(lang=='c'){
//         let data;
//         function cCompiler(){
//             return "c";
//         }
//     }
//     function javaCompiler(){
//         return "java compiler";
//     }
//     console.log(javaCompiler());

// }
// selectlang();


// console.log("Hello JS");
// console.dir(document);
// let parent = document.getElementsByClassName("parent");
// console.log()

console.dir(document);

const div = document.getElementsByClassName("parent");
console.log(div);
//div[0].innerText ="ABES Engineering College"; //dom manipulation
div[0].innerHTML = "<h2 style=color:red>ABESEC</h2>";
const h1 = document.createElement("h1");
h1.innerText = "Element has been made using DOM function";
h1.style.backgroundColor="cyan";
h1.style.color="red";
div[0].appendChild(h1);

console.log(h1);

const img = document.createElement('img');
img.src ='cat3.png';
img.setAttribute("height","200px");
console.log(img);
div[0].appendChild(img);












