const arr=[1,2,3,4,5,6,7,8];

const totalSum=arr.reduce((result,number)=>
{
    console.log("previous val",result);
    result+=number;
    return result;
},0);

console.log(totalSum);

___________________________________________________________________

const obj={
    {person:"renuka", age:26},
    {person:"ganesh",age:23},
    {person:"shashi",age:43},
};

const res=person.reduce