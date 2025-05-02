let x = 1;
let names = ["John", "Jane", "Doe"];

for (let i = 0; i < names.length; i++) {
    const paraId = `para${x}`;
    const paraElement = document.getElementById(paraId); 
    if (paraElement) { 
        paraElement.innerHTML = names[i]; 
    }
    x++;
}

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
};
document.getElementById("para4").innerHTML = person.firstName + " " + person.lastName + " is " + person.age + " years old.";

document.getElementById("para5").innerHTML = typeof "Rahul" + "<br>" +typeof 3.14 + "<br>" +typeof false + "<br>"+typeof [1,2,3,4] +"<br>" +typeof {name:"Rahul",age:25};

var text="";
for(name in names){
    text+=names[name]+" ";
}
document.getElementById("para6").innerHTML = text;

var persondetails="";
for(key in person){
    persondetails+=person[key]+" ";
}
document.getElementById("para7").innerHTML = persondetails;

var personames="";
let i=0;
while(i<names.length){
    personnames+=names[i]+" ";
    i++;
}
document.getElementById("para8").innerHTML = personnames;