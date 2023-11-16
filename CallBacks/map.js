const myarr=[1,2,3,4,5];

const squaredValue=myarr.map((number,index)=>{
    console.log(index,number);
    return number*number;
});
console.log(squaredValue);
//_______________________________________________________________________________

const rup=[200,30000,5000000];

const inrTODollar=82;
function ConvertinrTodollar(val){
    return val / inrToDollar;
}

const res=rup.map(ConvertinrTodollar(val));
console.log(res);