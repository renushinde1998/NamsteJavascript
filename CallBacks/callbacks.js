/*function PrintFirstName(name){
     console.log(name);
};

function PrintLastName(name){
    console.log(name);
};
//DRY--dont repeat yourself
const printfullname=`${PrintFirstName("renuka")} ${PrintLastName("shinde")}`;
console.log(printfullname);*/

/*const PrintFullName=(name,callbackFunc)=>{
    console.log(callbackFunc(name));
};
const printName=(name)=>{return name};

const res=`${PrintFullName("renuka",printName)} ${PrintFullName("shinde",printName)}`;

console.log(res);*/

//2nd example

//const myRadiusArr=[2,3,4,5,6];

//to define area,circumference,diameter for all val
//area=r*r;
//circum=pie(3.14)*r*r;
//diameter=2r;

/*const calculateArea=(myRadiusArr)=>{
    let result=[];

    for(let i=0;i<myRadiusArr.length;i++)
    {
        result.push(Math.PI*myRadiusArr[i]*myRadiusArr[i]);
    }
    return result;
};
const calculateCircumference=(myRadiusArr)=>{
    let result=[];

    for(let i=0;i<myRadiusArr.length;i++)
    {
        result.push(Math.PI*2*myRadiusArr[i]);
    }
    return result;
};
const calculateDiameter=(myRadiusArr)=>{
    let result=[];

    for(let i=0;i<myRadiusArr.length;i++)
    {
        result.push(2*myRadiusArr[i]);
    }
    return result;
};

const diameter=calculateDiameter(myRadiusArr);
const circumference=calculateCircumference(myRadiusArr);
const area=calculateArea(myRadiusArr);

console.log("diameter",diameter);
console.log("circumference",circumference);
console.log("area",area);*/
//______________________________________________________________________________________________________________

const myRadiusArr=[1,2,3,4,5,6];

const calculate=(radiusArr,formula)=>{
    let result=[];

    for(let i=0;i<radiusArr.length;i++)
    {
        result.push(formula(radiusArr[i]));
    }
    return result;
};

function circleAreaFn(radius){
    return Math.PI*radius*radius;
}

function circleCircumferenceFn(radius){
    return 2*Math.PI*radius;
};

function circleDiameterFn(radius){
    return 2*radius;
};

let finalAreas=calculate(myRadiusArr,circleAreaFn);
let finalcircumferences=calculate(myRadiusArr,circleCircumferenceFn);
let finaldiameters=calculate(myRadiusArr,circleDiameterFn);

console.log("Areas",finalAreas);
console.log("Diameters",finaldiameters);
console.log("circumference",finalcircumferences);
