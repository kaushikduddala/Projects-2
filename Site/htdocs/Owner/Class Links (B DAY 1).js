// this was mean for a page on my website to auto-open zoom links (this was in quarantine)
function reloadPage() { //setting reload function (for reloading for better results)
    window.location.href = "https://www.kaushiksites.epizy.com/Owner/Class%20Links%20(A%20day).html" } //opens the page again
setTimeout(() => {reloadPage(); }, 1800000); //sets timeout for some time
function autoOpen(Hour, Minute, Number, link){ //Sets the function with the variables that change
    var now = new Date();
    var Number = new Date(now.getFullYear(), now.getMonth(), now.getDate(), Hour, Minute, 0, 0) - now; // The requested time - the current time = the time till it needs to open
    if (Number <= 0){  //if its below 0
        Number = 86400000 // sets it to a day so that it wont open and will take enough time to reloa and keep delaying it
    } //closing
    }
    setTimeout(() => {window.location.href = link; }, Number); }