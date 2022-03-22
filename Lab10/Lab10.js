window.onload = () =>
{
    var caption = ["", "Recursive Reverse", "Count 7's Recursively", "Recursive Multiply", "Find it Recursively"];
    for(var i = 1; i <= 4; i++)
    {
        var newBtn = document.createElement("button");
        $(newBtn).attr("id", "btn" + (i)); 
        $(newBtn).html(caption[i]);
        $("nav").append(newBtn);
        var func_name = "p" + i + "Func()";
        $(newBtn).attr("onclick", func_name); 
    }
}

    /*  Pre: Enter a String.
        Post: The Reverse of the string has been outputted using recursion. */

function p1Func() {
    var s = prompt("Enter a String: ");
    document.getElementById("output").innerHTML = "Reverse of String: " + "<br></br>" + reverse(s);
}

function reverse(s) {
    var len = s.length;
    if(len < 2)
    {
        return s;
    }
    else
    {
        var newString = s.slice(1);
        return reverse(newString) + s[0];
    }
}


    /*  Pre: Enter a Number that represents natural numbers.
        Post: Number of 7's in the number is outputted using recursion. */

function p2Func() {
    var x = prompt("Enter a number: ");
    var n = parseInt(x);
    document.getElementById("output").innerHTML = "Number of 7's: " + "<br></br>" + howMany7(n);
}

function howMany7(n) {
    if(n==0)
    {
        return 0;
    }
    else if(n>0)
    {
        var newN = n % 10;
        if(newN == 7)
        {
            return 1 + howMany7(parseInt(n/10));
        }
        return howMany7(parseInt(n/10));
    }
}


    /*  Pre: Enter 2 Numbers that represents whole numbers.
        Post: Multiplication of both numbers is outputted using recursion and without using * operation. */

function p3Func() {
    var x = prompt("Enter 1st number: ");
    var y = prompt("Enter 2nd number: ");
    var m = parseInt(x);
    var n = parseInt(y);
    document.getElementById("output").innerHTML = "Multiplication: " + "<br></br>" + m + " x " + n + " = " + multiply(m,n);
}

function multiply(m,n) {
    if(n==0)
    {
        return 0;
    }
    else if(n==1)
    {
        return m;
    }
    else
    {
        return (m + multiply(m, n-1));
    }
}


    /*  Pre: Enter a number to find in Array.
        Post: Whether the number input is present in the array or not is outputted as "Yes" or "No" respectively. */

function p4Func() {
    var m = prompt("Find: ");
    var x = parseInt(m);
    var A = [8, 9, 9, 12, 13, 13, 13, 15, 20, 100, 100, 101, 123, 129, 300, 1000, 5001, 20000, 20000, 34511];
    
    var len = A.length;
    var res = find(x, A, 0, len);
    if(res == false)
    {
        document.getElementById("output").innerHTML = "Is the Number present in Array? " + "<br></br>" + "No";
    }
    else
    {
        document.getElementById("output").innerHTML = "Is the Number present in Array? " + "<br></br>" + "Yes";
    }
}

function find(x,A,i,j) {
    var mid = Math.floor((i+j)/2);
    if(i==j) {
        if(x == A[i]) {
            return true;
        }
        else {
            return false;
        }
    }
    else if(x<=A[mid]) {
        return find(x,A,i,mid);
    }
    else if(x>A[mid]) {
        return find(x,A,mid+1,j);
    }
    else {
        return false;
    }
}