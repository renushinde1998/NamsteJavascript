/*function SayHi(){
    return "sayHi";
};

console.log(SayHi());*/

//parameters and arguments
/*function SayHi(from,to){
    return `${from} getting hi to ${to}`;
};

console.log(SayHi("renuka","dnyanu"));*/

//functon expression 
//anonimus function-do not have name
/*const SayHiExpression=function(){
    console.log("hello mom");
};

console.log(SayHiExpression());

//named function expression
const SayHiExpression1=function xyz(){
    console.log("hello pappa");
};

console.log(SayHiExpression1());*/

//first class citizen-functions can have different forms and can do anything

const hello=()=>{
    return "say hello";
};

const HelloWorld=(param)=>{
    return param;
};

console.log(HelloWorld(hello)());
