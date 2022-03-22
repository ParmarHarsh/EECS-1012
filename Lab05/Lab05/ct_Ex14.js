// in Ex9 to Ex15, change the name of the following function properly
function fibonacci() {
  
    /* this statement defines an object reference to the 
       html element that its ID is "output".
        Every time you want to output something, use outputObj */
    var outputObj=document.getElementById("output");
  
    // this statement receives some data and parses it to integer
    var number = parseInt(prompt("Please enter a number: ", ""));
    var num = number;
    var secondLast=0;
    var last=1;
    var newValue=1;

    var fibo = "";

    // translate rest of your flowcharts to js here:
    for(var i = 0; i < number; i++) 
    {
        fibo = fibo + secondLast + ", ";
        newValue = last + secondLast;  
        secondLast = last;
        last = newValue;
    }
        
    /* this statement add some message to our output Object
      you would need to change the message to be appropriate in Ex10 to E15*/
      outputObj.innerHTML= "number: " + num + outputObj.innerHTML+ "<br><br>Fibonacci: " + fibo;

   //the following statements inform the user that the program ended
   //and disable the button
   outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
   document.getElementsByTagName("button")[0].setAttribute("disabled","true");
  }