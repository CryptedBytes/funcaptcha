generateProblem();
//   let problemform = document.getElementById("problemform");
//   problemform.addEventListener('submit', (event) => {
//     generateProblem();
// });
var a, b, solved, lastInputLen;

var inputfield = document.getElementById("answerinput");
inputfield.addEventListener('input', () =>{
    let problemlabel = document.getElementById("problemlabel");
    let inputlen = inputfield.value.length
    //console.log("Length of input: " + inputlen);
    //console.log("text changed");
    if(inputlen > 0 && inputlen > lastInputLen)  generateProblem();
  
    lastInputLen=inputfield.value.length
});

function generateProblem() {
    let problemlabel = document.getElementById("problemlabel");
    let input = document.getElementById("answerinput").value;
   // alert(input);
  
   

    //console.log("args: " + arguments[0])
    
    if(arguments[0] == "onclick" && inputfield.value == ""){
        alert("Please enter your answer on the input field.");
        inputfield.value = ""
    }
    else if(arguments[0] == "onclick" && input != a+b){
        alert("Your answer was incorrect. Please try again.");
        inputfield.value = ""
    }
    
    else if(arguments[0] == "onclick" && input == a+b){
        var sendbtn = document.getElementById("sendbtn");
        sendbtn.disabled = true
        inputfield.disabled = true
        solved = true
        alert("Your answer was correct.");
        problemlabel.textContent = `Humanity proved`;
    }

    if(!solved){
        a = Math.floor(Math.random()* 101) //0..100
        b = Math.floor(Math.random()* 101) //0..100
        problemlabel.textContent = `${a} + ${b}`;
    }
    

}
