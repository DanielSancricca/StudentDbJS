let studentName = ["Johnny", "Miguel", "Danny", "Tory", "Sam"];

let hometowns = ["Detroit", "Los Angeles", "Boston", "Miami", "Dallas"];

let favoriteFoods = ["steak", "hamburgers", "fish", "spaghetti", "tacos"];

let goAgain = true;

for(let i = 0; i<studentName.length; i++){
    let n = studentName[i];
    console.log(n);
}

while(goAgain === true){

let index = prompt(`Which of the ${studentName.length} students would you like to learn about? Please enter 1-5`)-1;
if(index > 0 && index <= studentName.length-1){
let userResponse = prompt(`What would you like to learn about ${studentName[index]}? Their hometown or favorite food?`).toLowerCase().trim();

if(userResponse === "hometown"){
    console.log(`${studentName[index]}'s hometown is ${hometowns[index]}.`);
    
}
else if(userResponse === "favorite food" || userResponse === "food"){
    console.log(`${studentName[index]}'s favorite food is ${favoriteFoods[index]}.`);

}
else{
    console.log("I'm sorry we only have information on a student's hometown or favorite food.");
}
}
else{
    console.log("I'm sorry that input does not match any student number.")
}


goAgain=RunAgain();

}


function RunAgain(){
    let userChoice = prompt("Would you like to learn about any of the other students? Please enter y or n").toLowerCase().trim();
    if(userChoice === "y"||userChoice ==="yes"){
        return true;
    }
    else if(userChoice === "n"||userChoice ==="no"){
        return false;
    }
    else{
        console.log("I'm sorry we can't accept that response. Please enter y or n.")
        return RunAgain();
}
}

 

