var a=2;
var b=3;
 function add (param1,param2){
    var ans=param1+param2;
    return ans;
 };

 var add1=add(a,b);
 var add2=add(add1,b);

 console.log("add1",add1);
 console.log("add2",add2);
