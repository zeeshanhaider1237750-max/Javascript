let x = parseInt(prompt("Pls, Enter the number till which you want to print"));

for( let y=1; y<=x; y++){
   let divoutput = document.getElementById("output");
    
   if(y % 3 == 0 && y % 5 == 0){
    divoutput.innerHTML += "FizzBuzz<br>";
   }
   else if(y % 3 == 0){
    divoutput.innerHTML += "Fizz<br>";
   }
   else if(y % 5 == 0 ){
    divoutput.innerHTML += "Buzz<br>";
   }
   else{
    divoutput.innerHTML += y +"<br>";
   }
}