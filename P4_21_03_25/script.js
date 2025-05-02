// document.write("harshita");
// document.writeln("hhhhh vvvvvv dddddd sssssssssss bbbbbbbb dddd");
function abc(){
    document.getElementById("ab").innerHTML="NIT expect some better placements out of you";
}
let names=["harshita","huda","tehseen"];
console.log(names);
const student={
    id:1,
    name:"harshita",
    age:21,
    isgraduate:false
}
console.log(student);

// alert("you are in danger");
// confirm("yes or no");
// prompt("yes or no","write yes or no");

function xyz(){
    var retval=confirm("yes or no");
    if(retval==true){
        document.write("user wants to continue...");
        return true;
    }
    else{
        document.write("user doesnot wants to continue...");
        return false;
    }
}

function pyq(){
    var retval=prompt("Enter your name","your name");
    document.write("you have entered: "+retval);
}



