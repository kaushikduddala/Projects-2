// this was meant for a page on my website to auto-open zoom links (this was in quarantine)
function reloadPage() { //setting reload function (for reloading for better results)
    window.location.href = "https://www.kaushiksites.epizy.com/Owner/Class%20Links%20(A%20day).html" } //opens the page again
setTimeout(() => {reloadPage(); }, 1800000); //sets timeout for some time
function autoOpen(Hour, Minute, Number, link){ //Sets the function with the variables that change
    var now = new Date();
    var Number = new Date(now.getFullYear(), now.getMonth(), now.getDate(), Hour, Minute, 0, 0) - now; // The requested time - the current time = the time till it needs to open
    if (Number <= 0){  //if its below 0
        Number = 86400000 // sets it to a day so that it wont open and will take enough time to reload and keep delaying it
    } //closing
    setTimeout(() => {window.location.href = link; }, Number); //sets timeout to open link (Not zoom link but a app link which links directly to the zoom app instead of opening a new tab which is found in the console of the zoom page after it tries top open zoom) 
} //closing function
autoOpen(8, 25, 1, "zoommtg://us02web.zoom.us/join?action=join&confno=96599941343&pwd=cGVCcVUvekw0U2NwM1J3ajdWelJVUT09&zc=0&mcv=0.92.11227.0929&confid=dXNzPVZzNlladTNzMnVxaXZYMUp1R3U4SmxVWnMyOGlpaDVmdlRVMUVpb01EM1I3UGltVG5RN0J0Q3dydmZneVF3RU5lc0d5QmxrQWcxNWh2SmpLcFN4R1U2emJfQS5NVkJUYVZkWGx4UnR6YlduJnRpZD05NjU4OTllNzU2ZjY0N2UzYWIyM2RiNjMxODUwYTgyNw%3D%3D&browser=opera&t=1601238091579")
autoOpen(9, 59, 2, "zoommtg://us02web.zoom.us/join?action=join&confno=89035798132&pwd=K2JDUjlzZFN5bXJEbk9nbi9XaTRidz09&zc=0&mcv=0.92.11227.0929&confid=dXNzPWlwM1A4WEFyVW5wWWJadGwyR3ktbVM5aTZEWV9hb1c4ZkVuTXlDQVEwMmF1WW9aenJwQ3NDNTNiN21fYnJNREFEZ203bmY3NjRtTjJGbjBCZ0N5ZEJqejh3Zy43MHJHQ29XSzFIODVTZE5jJnRpZD05NjU4OTllNzU2ZjY0N2UzYWIyM2RiNjMxODUwYTgyNw%3D%3D&browser=opera&t=1601046028402")
autoOpen(12, 3, 3, "zoommtg://zoom.us/join?action=join&confno=3740701861&pwd=WHVxY3dEQ3YxTUxsMHlsWFhGd0xmUT09&zc=0&mcv=0.92.11227.0929&confid=dXNzPTUzSkk2RlFSUW9rbVNabV9ZckRLZmJHZVdaVWpRdEtvTzVHOXlrWkx1TGlzU3kxbThod1dnME1VX0lucHE4czAzX0oxS3liZ2hQOU5zUS5vMWZkY0NoVW9BZ1V0THhyJnRpZD05NjU4OTllNzU2ZjY0N2UzYWIyM2RiNjMxODUwYTgyNw%3D%3D&browser=opera&t=1601059649894")
autoOpen(2, 13, 4, "zoommtg://us02web.zoom.us/join?action=join&confno=82227549621&pwd=TlNlY015bUhxU05TOVh3RElkSjZuZz09&zc=0&mcv=0.92.11227.0929&confid=dXNzPWZhdm96VXlkdXRCR3FPUVl4TG5udTJsS09qb1dLQTVzbE1nYl9LTlByV1dnUGpORk9TdkI0MGV5a29JOG54ZHgwN0lkTnY3XzJ1aUxLNTI3V2o5dHNYV3lQZy41eGdCTW5KdVNxcXVqVFU1JnRpZD04NDg2Y2U2MmUwYzA0MzczYjRkZDk0NTdhMGM4ZTdmZg%3D%3D&browser=chrome&t=1608238917267")
