/******************************************************************************

ASSIGNMENT 1



Your first task will be to link this javascript file to the index.html file

using one of the methods I showed in the first lecture.



<-- Locate the index.html file in the file browser and link it to this file, 

javascript.js

******************************************************************************/



/****************************************************************************** 

ASSIGNMENT 2



Last lecture I showed you how to make variables that can hold values of the 

various data types. Make some variables of the following datatypes: 

String, number, boolean, array

You can choose what the actual content is.

Try to use both the let and const keywords

******************************************************************************/

// String trenger "rundt seg".
let greeting = "Hello World";
// Skal ikke ha "" rundt tall (hvis det skal være tall).
const number = 10;
// Boolean (False/True)
const isAge = false;
// Array er en liste.
let shoppingList = ["Bread", "water"];
console.log (greeting, number, isAge, shoppingList);



/****************************************************************************** 

ASSIGNMENT 3



Try out a few of the operators we looked at (+, -, /, *)

as well as a few of the shorthand operators (++, --, +=, -=)

******************************************************************************/

// Variabel "number2" = variabel number (fra høyere opp) +1
const number2 = number +1;
// Litt sånn som i sted, bare variabler og ganging
const number3 = number*number2;
let number4 = 4;
console.log (number4);
// Når jeg bruker ++ og += så forandres valuen av number4 som betyr om jeg bruker number4 så er valuen 9 istedenfor 4. Hadde jeg bare brukt +1 og +4, så hadde den fortsatt vært 4.
number4++;
number4+=4;
console.log (number2, number3, number4);



/****************************************************************************** 

ASSIGNMENT 4



Write an IF/ELSE conditional statement that checks that userName isn't 

empty(""), that the user age is 18+, and that userIsBlocked is false. 

(HINT: Use the && (logical AND) to check all 3 in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true 

and the goToPage variable to "/home" then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error message.

Try changing the values of the variables to make sure your IF/ELSE conditional

can handle all cases correctly 

******************************************************************************/

// Er testet uten navn og med
let userName = "Testerman";
// er tested med alder under og over 18
let userAge = 19;

let userIsLoggedIn = false;
// Er tested med false eller true
let userIsBlocked = false;

let goToPage = "";

// != "" sjekker om navnet er IKKE tomt. userAge >=(greater or equals to)18. ==false. Kunne gjort !userisBlocked istedenfor ==false. Men det blir lettere for meg å se med == false.
if (userName != "" && userAge>= 18 && userIsBlocked==false){
    //userIsLoggedIn=True er tydligvis feil. 
    userIsLoggedIn=true;
    goToPage = "/home";
    console.log ("Welcome");
}
else {
    //Hvis parameterene over ikke er fulfilled, send dette.
console.log("Error");
}


/******************************************************************************

ASSIGNMENT 5

Make a variable called userTitle and set the content equal to "Mr." if userMale 

is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 

this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,

to see that your conditional is working.

******************************************************************************/





const userMale = false;




//your code here