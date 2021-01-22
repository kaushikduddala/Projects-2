from flask import Flask, render_template

app = Flask(__name__)

courses = [
    {
        "name": "Academy Connect",
        "instructor": "Mr. Daniel",
        "start_time": "9:12",
        "end_time": "9:55",
        "zoom_link": "zoomtg://us02web.zoom.us/join?09af9",
    },
    {
        "name": "3rd and 4th Period",
        "instructor": "Ms. Watts",
        "start_time": "9:59",
        "end_time": "11:29",
        "zoom_link": "zoomtg://us02web.zoom.us/join?0av3r",
    },
    {
        "name": "Band (1)",
        "instructor": "Mr. Holzer",
        "start_time": "12:03",
        "end_time": "12:49",
        "zoom_link": "zoomtg://us02web.zoom.us/join?923a8",
    },
]

@app.route("/schedule")
def class_schedule():
    return render_template("schedule.html", courses=courses)