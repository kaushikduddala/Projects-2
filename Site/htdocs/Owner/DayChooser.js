date1 = new Date()
date2 = date.getDay()
if (date2 == 1 || date2 == 2 || date2 == 3){
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
    window.setTimeout(redirectBack, 4);
}
    