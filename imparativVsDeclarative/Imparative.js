const myveggies=["poTato","pEpper","hot-pepper"];
//get pepperss out of it->list down peppers

//imparative
const getPeppers=(myveggies)=>{
    let veggies=[];

    for(let i=0;i<myveggies.length;i++){
        if(myveggies[i].toLowerCase().includes("peppers"))
        {
          veggies.push(myVeggies[i]);
        }
    }
    return veggies;
};

//declarative

const getPeppers1=(myveggies)=>{
    const getPep=(myveggies)=>{
        myveggies.filter((myveggies)=>{
            myveggies.toLowerCase().includes("peppers");
        });
    };
    return getPep;
};

getPeppers1(myveggies);