let tigger = {character: 'Tigger'}
let pooh = {character:'Winnie the Pooh'}
let piglet = {character:'Piglet'}
let bees = {character:'Bees'}
let christopherRobin  = {character:'Christopher Robin'}
let owl = {character:'Owl'}
let rabbit = {character: 'Rabbit'}
let gopher = {character: 'Gopher'}
let kanga ={character: 'Konga'}
let eeyore = {character:'Eeyore'}
let heffalumps ={character:'Heffalumps'}
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
var tigger = {

    character: "Tigger",
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }

}; 

var pooh = { 

    character: "Winnie the Pooh",
    greet: function(){
        console.log("Hello everyone!");
    }

};

var piglet = {

    character: "Piglet",
    greet: function(){
        console.log("i love my house");
    }

};

var bees = { 
    
    character: "Bees",
    greet: function(){
        console.log("Wiiii!!");
    }
    
};

var christopherRobin = { 
    
    character: "Christopher Robin",
    greet: function(){
        console.log("Pooh is my best friend");
    }

};

var owl = {
    
    character: "Owl",
    greet: function(){
        console.log("Uuuuuu!");
    }

};

var rabbit = {
    
    character: "Rabbit",
    greet: function(){
        console.log("Don't bother me");
    }

};

var gopher = {
    
    character: "Gopher",
    greet: function(){
        console.log("UwU");
    }

};

var kanga = {
    
    character: "Kanga",
    greet: function(){
        console.log("UnU");
    }

};

var eeyore = {
    
    character: "Eeyore",
    greet: function(){
        console.log(":v");
    }
    
};

var heffalumps = {
    
    character: "Heffalumps",
    greet: function(){
        console.log("Life is wonderfull");
    }
    
};



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
        }
    }
    if(input == "east"){
        if(player.location.east == undefined){
            console.log("You are not allowed to move that way");
        }
        else {
            console.log("You are now at" + " " + player.location[input].character + " " + "house");
            player.location = player.location[input];
        }
    }
    if(input == "west"){
        if(player.location.west == undefined){
            console.log("You are not allowed to move that way");
        }
        else {
            console.log("You are now at" + " " + player.location[input].character + " " + "house");
            player.location = player.location[input];
        }
    }
    
}



