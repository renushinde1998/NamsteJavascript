/*numbers*/



const g=false;
const b=true;

const arr=[1,2,3,4,5];

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

const person={
    firstname:"renuka",
    lastname:"shinde",
    age:26,
};

console.log(person.firstname);

function bevarage(drink,quantity){
    return `i need ${quantity} ${drink}`;
}

console.log(bevarage("coffee",4));
console.log(bevarage("tea",2));