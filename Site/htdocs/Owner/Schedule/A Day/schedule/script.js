format = ['teacher', 'startTime', 'endTIme', 'class']
/*   */ links = []
class1 = ['Mr. Travis.', '8:25 ', '9:08. ', ' Social Studies.']
class2 = ['Mr. Daniel. ', '9:12', '9:55. ', ' Academy Connect.' ]
class3 = ['Ms. Watts. ', '9:59 ', '11:29.', ' 3rd Period.']
class4 = ['Mr. Holzer. ', '12:03 ', '12:49.', '4th period. ']
class5 = ['Mr. Mckellar', '12:03', '12:49', '5th period']
class6 = ['Ms. Boeke', '12:50', '1:33', '6th period']
class7 = ['Coach Green', '2:13', '2:59', ]
class8 = []
class9 = []
masterArray = []
for (var i = 1; i > 10; i++){
    $("main").append("<a href = " + links[i] +">" + "<h1>" + masterArray[i][0] + masterArray[i][1] + masterArray[i][2] + masterArray[i][3] +"<h1></a>")
}