// in Ex9 to Ex15, change the name of the following function properly
function problem_09() {
  
   /* this statement defines an object reference to the 
      html element that its ID is "output".
	   Every time you want to output something, use outputObj */
   var outputObj=document.getElementById("output");

   // this statement receives some data and parses it to integer
   var number = parseInt(prompt("Please enter a number: ", ""));
   var num = number;
   var i = 0;
   var digit = "";
   
   // translate rest of your flowcharts to js here:
   while(number != 0) 
   {
      var x = number % 10;
      digit = digit + x + ", ";
      number = Math.floor(number / 10);
   }
   
   /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/
     outputObj.innerHTML="number: "+num+"<br><br>its digits: "+ digit;

  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}