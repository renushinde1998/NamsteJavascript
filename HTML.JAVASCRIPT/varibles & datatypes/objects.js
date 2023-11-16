let captainAmerica={
    name:"steve rogers",
    age:102,
    allies:["tony","bruce","natasha","bucky"],
    address:{
        country:"USA",
        city:{
            name:"brooklyn",
            pincode:"1234",
        },
    },
    isAvenger:true,
    SayHi:function(){
        console.log("caption says HI!..");
    },
    };

    //accessing properties from the object

    console.log(captainAmerica.allies[2]);

    console.log(captainAmerica.address.city.pincode);

    captainAmerica.SayHi();
    console.log(captainAmerica.age);

    //manippulating data

    captainAmerica.isAvenger=false; 

    //update data

    captainAmerica.movies=["civil ear","end game"];

    console.log("after adding movies",captainAmerica);

    //delete properties
    delete captainAmerica.movies;
    console.log("after deleting movies",captainAmerica);
