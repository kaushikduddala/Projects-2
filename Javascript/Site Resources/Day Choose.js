<script> //starts the script
date1 = new Date() //gets the current date
date2 = date1.getDay() // gets the day (1-7)
if (date2 == 1 || date2 == 2 || date2 == 5){ //detects if its A day (monday, tuesday, or friday)
   window.location.href = "A%20Day" //redirects if its A day
} else if (date2 == 3){ //checks if its B day 1 (wenesday)
    window.location.href = "B%20Day%201/" //redirects if its b day 1
} else if (date2 == 4){ // checks if its b day 2 (thursday)
   window.location.href = "B%20Day%202" //redirects if its thursday
} else{ // detects if its the weekend
   alert("Error: Day is not part of the required days.") //tells that
   function redirectBack(){ //makes a function that redirects to the index for the timeout function later on
       window.location.href = "https://www.kaushiksites.epizy.com/Owner/" //goes to the index
   } //closes the function
   window.setTimeout(redirectBack(), 4); //sets a wait for 4 seconds
    }  //close the else statement
</script> <!--Ends the script-->
