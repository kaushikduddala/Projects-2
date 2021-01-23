format = ['teacher', 'startTime', 'endTIme', 'class']
/*   */ links = []
class1 = ['Mr. Travis.', '8:25 ', '9:08. ', ' Social Studies.']
class2 = ['Mr. Daniel. ', '9:12', '9:55. ', ' Academy Connect.' ]
class3 = ['Ms. Watts. ', '9:59 ', '11:29.', ' GT ILA.']
class4 = ['Mr. Holzer. ', '12:03 ', '12:49.', 'Band(1). ']
class5 = ['Mr. Mckellar', '12:03', '12:49', 'Band(2). ']
class6 = ['Ms. Boeke', '12:50', '1:33', '7th PAP math. ']
class7 = ['Coach Green', '2:13', '2:59', 'PE.']
class8 = ['Ms. Kitchens', '3:00', '3:45', 'Science.']
masterArray = [class1, class2, class3, class4, class5, class6, class7, class8]
for (var i = 1; i < 9; i++){
    $("main").append("<a href = " + links[i] +">" + "<h3>" + masterArray[i][0] + masterArray[i][1] + masterArray[i][2] + masterArray[i][3] +"<h3>" + "</a>" + "<div style='line-height:%;'>" + "<br>"+  "</div>")
}