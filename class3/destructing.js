/*const obj={
    x:3.6,
    y:7.4,
    z:6.54,
};*/

/*const {x,y,z}=obj;
console.log(x,y,z);*/

/*const {x:x1,y:y1,z:z1}=obj;
console.log(x1,y1,z1);*/

//accessing varibles using nested obj
    /*const nest={
        start:{x:5,y:6},
        end:{x:6,y:-9},
    };

    const{
        start:{ x:startX ,y:startY},
    }=nest;
    console.log(startX);

    //rest operator
    const [p,q, ,...rest]=[1,2,3,4,5,7,8,9];
    console.log(rest);*/

    /*const arr=[1,2,3,4,5];
    // shadow clone
    const arr1=[...arr];
    const arr2=arr.slice();
    const arr3=arr;
    console.log(arr==arr3);
    console.log(arr===arr1,arr===arr2,arr===arr3);
    console.log(arr,arr1,arr2,arr3);*/

    const p=[1,2,3];
    const q=[4,5,6];

    const r=p.concat(q);
    console.log(r);

    const s=[...p,...q];
    console.log(s);

