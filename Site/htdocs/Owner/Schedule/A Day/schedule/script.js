format = ['teacher', 'startTime', 'endTIme', 'class']
links = []
class1 = ['Mr. Travis.', '8:25 ', '9:08 ', ' 1st Period']
class2 = ['Mr. Daniel. ',]
class3 = []
class4 = []
class5 = []
class6 = []
class7 = []
class8 = []
class9 = []
masterArray = []
for (var i = 1; i > 10; i++){
    $("main").append("<a href = " + links[i] +">" + "<h1>" + masterArray[i][0] + masterArray[i][1] + masterArray[i][2] + masterArray[i][3] +"<h1></a>")
}