let tigger = {character: 'Tigger',
    greet: function(){
            console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
        }
}

let pooh = {character:'Winnie the Pooh',
    greet: function(){
            console.log("Hello everyone!");
        }
}

let piglet = {character:'Piglet',
    greet: function(){
            console.log("i love my house");
        }
}

let bees = {character:'Bees',
    greet: function(){
            console.log("Wiiii!!");
        }
}

let christopherRobin  = {character:'Christopher Robin',
    greet: function(){
            console.log("Pooh is my best friend");
        }
}

let owl = {character:'Owl',
    greet: function(){
            console.log("Uuuuuu!");
        }
}

let rabbit = {character: 'Rabbit',
    greet: function(){
            console.log("Don't bother me");
        }
}

let gopher = {character: 'Gopher',
    greet: function(){
            console.log("UwU");
        }
}
let kanga ={character: 'Konga',
    greet: function(){
            console.log("UnU");
        }
}
let eeyore = {character:'Eeyore',
    greet: function(){
            console.log(":v");
        }
}

let heffalumps ={character:'Heffalumps',
    greet: function(){
            console.log("Life is wonderfull");
        }
}

Object = "none";

tigger.north = pooh;

pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = christopherRobin;

piglet.north = owl;
piglet.east = pooh;

bees.north = rabbit;
bees.west = pooh;

christopherRobin.north = kanga;
christopherRobin.south = pooh;
christopherRobin.west = owl;
christopherRobin.east = rabbit;

owl.east = christopherRobin;
owl.south = piglet;

rabbit.west = christopherRobin;
rabbit.east = gopher;
rabbit.south = bees;

kanga.south = christopherRobin;
kanga.north = eeyore;

eeyore.south = kanga;
eeyore.east = heffalumps;

heffalumps.west = eeyore;

let player = {
    location: tigger
}
/*
tigger.greet = function(){
    console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")
}

christopherRobins.greet = function(){
    console.log("Pooh is my best friend")
}
*/

function move(input){
    if(input == "north"){
        if(player.location.north == undefined){
            console.log("You are not allowed to move that way");
        }
        else {
            console.log("You are now at" + " " + player.location[input].character + " " + "house");
            player.location = player.location[input];
            let a = player.location;
            a.greet();
        }
    }
    if(input == "south"){
        if(player.location.south == undefined){
            console.log("You are not allowed to move that way");
        }
        else {
            console.log("You are now at" + " " + player.location[input].character + " " + "house");
            player.location = player.location[input];
            let a = player.location;
            a.greet();
        }
    }
    if(input == "east"){
        if(player.location.east == undefined){
            console.log("You are not allowed to move that way");
        }
        else {
            console.log("You are now at" + " " + player.location[input].character + " " + "house");
            player.location = player.location[input];
            let a = player.location;
            a.greet();
        }
    }
    if(input == "west"){
        if(player.location.west == undefined){
            console.log("You are not allowed to move that way");
        }
        else {
            console.log("You are now at" + " " + player.location[input].character + " " + "house");
            player.location = player.location[input];
            let a = player.location;
            a.greet();
        }
    }
    
}



