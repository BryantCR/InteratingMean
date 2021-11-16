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

tigger.greet = function(){
    console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")
}

christopherRobins.greet = function(){
    console.log("Pooh is my best friend")
}

var tiggers = {

    character: "Tigger",
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }

}; 

var poohs = { 

    character: "Winnie the Pooh",
    greet: function(){
        console.log("Hello everyone!");
    }

};

var piglets = {

    character: "Piglet",
    greet: function(){
        console.log("i love my house");
    }

};

var beess = { 
    
    character: "Bees",
    greet: function(){
        console.log("Wiiii!!");
    }
    
};

var christopherRobins = { 
    
    character: "Christopher Robin",
    greet: function(){
        console.log("Pooh is my best friend");
    }

};

var owls = {
    
    character: "Owl",
    greet: function(){
        console.log("Uuuuuu!");
    }

};

var rabbits = {
    
    character: "Rabbit",
    greet: function(){
        console.log("Don't bother me");
    }

};

var gophers = {
    
    character: "Gopher",
    greet: function(){
        console.log("UwU");
    }

};

var kangas = {
    
    character: "Kanga",
    greet: function(){
        console.log("UnU");
    }

};

var eeyores = {
    
    character: "Eeyore",
    greet: function(){
        console.log(":v");
    }
    
};

var heffalumpss = {
    
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
            player.location.greet();
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



