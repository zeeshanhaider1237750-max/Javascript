console.log(percentage);
let number = parseInt(prompt("Enter a number:"));
function add7(){
    return number + 7;
}
 let result = add7(number);
 window.alert(result);



 
 let g, h;
 g = parseInt(prompt("pls, enter the first number"));
 h = parseInt(prompt("pls, enter the second number"));
 function multiply(g, h){
    return g*h;
 }
 let result = multiply(g, h);
 window.alert(result); 
  



 let letter = prompt("pls, Enter a string of letter's only.")
function capitalize(letter){
    let firstword = letter.slice(0,1).toUpperCase();

    let restwords = letter.slice(1).toLowerCase();
    
    let finalresults = firstword + restwords
    return finalresults;
}

window.alert(capitalize(letter));
   




let word = prompt("pls, Enter a string of letter's for the needed output")
function lastletter(word){
    let lastword = word.slice(-1);
    return lastword;
}
window.alert(lastletter(word));