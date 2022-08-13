generateProblem();
//   let problemform = document.getElementById("problemform");
//   problemform.addEventListener('submit', (event) => {
//     generateProblem();
// });
var a, b;

var inputfield = document.getElementById("answerinput");
inputfield.addEventListener('input', () =>{
    let problemlabel = document.getElementById("problemlabel");
    let inputlen = inputfield.value.length
    //console.log("Length of input: " + inputlen);
    //console.log("text changed");
    if(inputlen > 0)  generateProblem();
});

function generateProblem() {
    let problemlabel = document.getElementById("problemlabel");
    let input = document.getElementById("answerinput").value;
   // alert(input);
  
    a = Math.floor(Math.random()* 101) //0..100
    b = Math.floor(Math.random()* 101) //0..100
    problemlabel.textContent = `${a} + ${b}`;

    //console.log("args: " + arguments[0])
    if(arguments[0] == "onclick" && input != a+b){
        alert("Your answer was incorrect. Please try again.");
    }

}
