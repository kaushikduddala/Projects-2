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
autoOpen(9, 12, 2, "zoommtg://us02web.zoom.us/join?action=join&confno=4766955166&pwd=Z1F5OFRkY3hBcWpSaHpzRFpTbGxhQT09&zc=0&mcv=0.92.11227.0929&confid=dXNzPUxBdmF4NHR3VHFTMEFUejNQTEluTllHQkZvb2lKb1NVQkRLMzBXVFZFaTJxUWVTdHU3UmtYcENjWVRSNjNhc3hDMnBTOXloeDRIc2ZaVFRieERfOUJGbFEueC1KTW4yZS0waDdQN09ZUSZ0aWQ9OTY1ODk5ZTc1NmY2NDdlM2FiMjNkYjYzMTg1MGE4Mjc%3D&browser=opera&t=1601059272231")
autoOpen(9, 59, 3, "zoommtg://us02web.zoom.us/join?action=join&confno=4766955166&pwd=Z1F5OFRkY3hBcWpSaHpzRFpTbGxhQT09&zc=0&mcv=0.92.11227.0929&confid=dXNzPUxBdmF4NHR3VHFTMEFUejNQTEluTllHQkZvb2lKb1NVQkRLMzBXVFZFaTJxUWVTdHU3UmtYcENjWVRSNjNhc3hDMnBTOXloeDRIc2ZaVFRieERfOUJGbFEueC1KTW4yZS0waDdQN09ZUSZ0aWQ9OTY1ODk5ZTc1NmY2NDdlM2FiMjNkYjYzMTg1MGE4Mjc%3D&browser=opera&t=1601059272231")
autoOpen(12, 3, 4, "zoommtg://zoom.us/join?action=join&confno=3740701861&pwd=WHVxY3dEQ3YxTUxsMHlsWFhGd0xmUT09&zc=0&mcv=0.92.11227.0929&confid=dXNzPTUzSkk2RlFSUW9rbVNabV9ZckRLZmJHZVdaVWpRdEtvTzVHOXlrWkx1TGlzU3kxbThod1dnME1VX0lucHE4czAzX0oxS3liZ2hQOU5zUS5vMWZkY0NoVW9BZ1V0THhyJnRpZD05NjU4OTllNzU2ZjY0N2UzYWIyM2RiNjMxODUwYTgyNw%3D%3D&browser=opera&t=1601059649894")
autoOpen(12, 50, 5, "zoommtg://zoom.us/join?action=join&confno=81460838057&pwd=N0RvU21JaHUwcmRRNStPVUpxK2NQZz09&zc=0&mcv=0.92.11227.0929&confid=dXNzPUVTN281ckZFRjlwcEdjcUVpTHRXb3hHUHFCdjY1d1puT1VCZ2F0aXhIZ2VrSExqSXpKM2oxZGEydVVPeEVoNkNFZFd2ZlhZYjlYVVZxSWcuZ2lKN3NSRm5VVzcwMzNaRiZ0aWQ9OTY1ODk5ZTc1NmY2NDdlM2FiMjNkYjYzMTg1MGE4Mjc%3D&browser=opera&t=1601059976555")
autoOpen(2, 13, 6, )