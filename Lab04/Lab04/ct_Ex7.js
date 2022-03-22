// in Ex2 to Ex8, change the name of the following function properly
// also, update pre/post conditions accordingly
function numberOfPosNeg() {
   
    //precondition: 
    //	0 < a < 100 , a represents Real numbers
    //Postcondition:
    //	The letter grade is outputted.                             
 
 
    /* in Ex1, change the following two lines such that 
       num1 and num2 are parsed to integer before be 
       assigned to w and h, respectively.                   */
    /* in Ex 2, rename w and h to a and b, respectively.    */
    var d1 = document.getElementById("num1").value;
    var x =  parseFloat(d1);

    if(x > 0) {
        document.getElementById("output").innerHTML = "Positive";
        var count = parseFloat(document.getElementById("positives_counter").innerHTML);
        count = count + 1;
        document.getElementById("positvies_counter").innerHTML = count;
    }
    else if(x < 0) {
        document.getElementById("output").innerHTML = "Negative";
        var count = parseFloat(document.getElementById("negatives_counter").innerHTML);
        count = count + 1;
        document.getElementById("negatives_counter").innerHTML = count;
    }
    else {
        document.getElementById("output").innerHTML = "End";
        document.getElementById("num1").setAttribute("disabled","true");
        document.getElementsByTagName("button")[0].setAttribute("disabled","true");
        document.getElementById("ex_7").style.display = "inline";
    }
    /* in Ex5, you should delete from Line 15 to this line */
 
    //in Ex 5, uncomment this block
    
 
    /* in Ex2 to Ex5, you need to renmae "sum" to make it more relevant
       to those problems, you may also need to rename s to a better 
       varibale that you have in your formulas above */
          
 }
