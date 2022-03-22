/*  Webpage JavaScript document for Lab06.
    Author: Harsh Parmar
    For: EECS 1012, York University, Lassonde School of Engineering */

    function Ex1() 
    {
        /*  Pre: Take a number that represents a positive integer.
            Post: Whether the number is a prime number or not a prime number is outputted.  */

        // Required variables and initiation of variables
        var num = parseInt(prompt("Please enter a number: ", ""));
        var prime = true;
        var d = 2;

        // Translating Flowchat to JS
        while(prime == true && d <= (num/2))
        {
            if(num % d == 0)
                prime = false;

            d = d + 1;
        }

        if(prime==true)
            alert(num + " is prime");
            //document.getElementById("output").innerHTML = num + " is prime";
        else
            alert(num + " is not prime");
            //document.getElementById("output").innerHTML = num + " is not prime";
    }
    
    function Ex2() 
    {
        /*  Pre: Take number inputs that represents an integer.
            Post: Whether the sum of first 4 inputs is equal to sum of next 4 inputs or not is outputted.  */

        // Required variables and initiation of variables
        var sum1 = 0;
        var sum2 = 0;

        // Translating Flowchat to JS
        for(var i=1;i<=4;i++)
        {
            var num = parseInt(prompt("Please enter number " + i + " :", ""));
            sum1 = sum1 + num;
        }
        for(var i=1;i<=4;i++)
        {
            var num = parseInt(prompt("Please enter number " + i + " :", ""));
            sum2 = sum2 + num;
        }

        if(sum1==sum2)
            alert("yes");
            //document.getElementById("output").innerHTML = "yes";
        else
            alert("no");
            //document.getElementById("output").innerHTML = "no";
    }

    function Ex3() 
    {
        /*  Pre: Take number inputs that represents an integer.
            Post: The number of positive and negative numbers are calculated but not outputted.  */            

        // Required variables and initiation of variables
        var p = 0;
        var n = 0;

        // Translating Flowchat to JS
        do {
            var num = parseInt(prompt("Please enter a number: ", ""));
            if(num > 0){
                p = p + 1;
            }
            else if (num < 0){
                n = n + 1;
            }
        } while(num != 0 && p <= 2*n);

    }

    function Ex4() 
    {
        /*  Pre: Take number inputs that represents an integer.
            Post: Whether the negative numbers in the first 4 inputs and positive numbers of last 4 numbers are equal or not is outputted.  */                       

        // Required variables and initiation of variables
        var cnt1 = 0;
        var cnt2 = 0;

        // Translating Flowchat to JS
        for(var i=1;i<=4;i++)
        {
            var num = parseInt(prompt("Please enter number: ", ""));
            if(num<0)
                cnt1 = cnt1 + 1;
            else
                continue;
        }
        for(var i=1;i<=4;i++)
        {
            var num = parseInt(prompt("Please enter number: ", ""));
            if(num>0)
                cnt2 = cnt2 + 1;
            else
                continue;
        }

        if(cnt1==cnt2)
            alert("yes");
            //document.getElementById("output").innerHTML = "yes";
        else
            alert("no");
            //document.getElementById("output").innerHTML = "no";
    }

    function Ex5() 
    {
        /*  Pre: Take a number that represents a positive integer.
            Post: Prime Numbers until that number are outputted.  */           

        // Required variables and initiation of variables
        var num = parseInt(prompt("Please enter number: ", ""));

        // Translating Flowchat to JS
        for(var i=2;i<=num;i++)
        {
            if(prime(i)==true)   
                alert(i);
            //document.getEleentById("output").innerHTML = i + ", ";
        }
    }

    function prime(num)
    {
        /*  Pre: Receive a number from the main algorithm.
            Post: True or false is returned based on the input which verifies that it is a prime number or not.  */

        flag = true;
        d = 2;
        while(flag == true && d <= (num/2))
        {
            if(num % d == 0){
                flag = false;
            }
            d = d + 1;
        }   
        return flag;
    }

    function Ex6() 
    {
        /*  Pre: Take a number that represents a positive integer.
            Post: Prime Numbers that has 7 in it until that number are outputted.  */

        // Required variables and initiation of variables
        var num = parseInt(prompt("Please enter number: ", ""));

        // Translating Flowchat to JS
        for(var i = 2; i<=num ;i++)
        {
            if(prime(i)&&has7(i)==true)
            {
              alert(i);
            }
        }
    }

    function prime(num)
    {
        /*  Pre: Receive a number from the main algorithm.
            Post: True or false is returned based on the input which verifies that it is a prime number or not.  */

        flag = true;
        d = 2;
        while(flag == true && d <= (num/2))
        {
            if(num % d == 0){
                flag = false;
            }
            d = d + 1;
        }   
        return flag;
    }

    function has7(num)
    {
        /*  Pre: Receive a number from the main algorithm.
            Post: True or false is returned based on the input which verifies that input has a 7 or not.  */

        var flag = false;
        num = num.toString();
        if(num.indexOf('7')!=-1)
        {
            return true;
        }

        return flag;
    }

    