// this was mean for a page on my website to auto-open zoom links (this was in quarantine)
function reloadPage() { //setting reload function (for reloading for better results)
    window.location.href = "https://www.kaushiksites.epizy.com/Owner/Class%20Links%20(A%20day).html" } //opens the page again
setTimeout(() => {reloadPage(); }, 1800000); //sets timeout for some time
function autoOpen(Hour, Minute, Number, link){ //
    var now = new Date();
    var Number = new Date(now.getFullYear(), now.getMonth(), now.getDate(), Hour, Minute, 0, 0) - now;
    if (Number <= 0){
        Number = 86400000
    }
    function OpenPageJoin1(){
       window.location.href = link;
    }
    setTimeout(() => {OpenPageJoin1(); }, Number); }