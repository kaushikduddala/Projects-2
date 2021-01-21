<script> //starts the script
    date1 = new Date() //gets the current date
date2 = date.getDay() // gets the day (0-6)
if (date2 == 1 || date2 == 2 || date2 == 3){ //detects if its A day (monday )
    window.location.href = "www.kaushiksites.epizy.com/Owner/Class%20Links%20(A%20day).html"
} else if (date2 == 4){
    window.location.href = "https://www.kaushiksites.epizy.com/Owner/Class%20Links%20(B%20day%201).html"
} else if (date2 == 5){
    window.location.href = "https://www.kaushiksites.epizy.com/Owner/Class%20Links%20(B%20day%202).html"
} else{ 
    alert("Error: Day is not part of the required days.")
    function redirectBack(){
        window.location.href = "https://www.kaushiksites.epizy.com/Owner/"
    }
    window.setTimeout(redirectBack(), 4);
}
</script>