/* this is line is really long so i'll just explain it here. So this is all the links in order and its takes later on by the <a href => to give the links in order  */ links = ['zoommtg://us02web.zoom.us/join?action=join&confno=96599941343&pwd=cGVCcVUvekw0U2NwM1J3ajdWelJVUT09&zc=0&mcv=0.92.11227.0929&confid=dXNzPVZzNlladTNzMnVxaXZYMUp1R3U4SmxVWnMyOGlpaDVmdlRVMUVpb01EM1I3UGltVG5RN0J0Q3dydmZneVF3RU5lc0d5QmxrQWcxNWh2SmpLcFN4R1U2emJfQS5NVkJUYVZkWGx4UnR6YlduJnRpZD05NjU4OTllNzU2ZjY0N2UzYWIyM2RiNjMxODUwYTgyNw%3D%3D&browser=opera&t=1601238091579', 'zoommtg://us02web.zoom.us/join?action=join&confno=4766955166&pwd=Z1F5OFRkY3hBcWpSaHpzRFpTbGxhQT09&zc=0&mcv=0.92.11227.0929&confid=dXNzPUxBdmF4NHR3VHFTMEFUejNQTEluTllHQkZvb2lKb1NVQkRLMzBXVFZFaTJxUWVTdHU3UmtYcENjWVRSNjNhc3hDMnBTOXloeDRIc2ZaVFRieERfOUJGbFEueC1KTW4yZS0waDdQN09ZUSZ0aWQ9OTY1ODk5ZTc1NmY2NDdlM2FiMjNkYjYzMTg1MGE4Mjc%3D&browser=opera&t=1601059272231']
class1 = ['Mr. Travis.', '8:25 ', '9:08. ', ' Social Studies.'] //class 1
class2 = ['Mr. Daniel. ', '9:12', '9:55. ', ' Academy Connect.' ] //class 2
class3 = ['Ms. Watts. ', '9:59 ', '11:29.', ' GT ILA.'] //class 3
class4 = ['Mr. Holzer. ', '12:03 ', '12:49.', 'Band(1). '] //class 4
class5 = ['Mr. Mckellar', '12:03', '12:49', 'Band(2). '] //class 5
class6 = ['Ms. Boeke', '12:50', '1:33', '7th PAP math. '] //class 6
class7 = ['Coach Green', '2:13', '2:59', 'PE.'] //class 7
class8 = ['Ms. Kitchens', '3:00', '3:45', 'Science.'] //class 8
masterArray = [class1, class2, class3, class4, class5, class6, class7, class8] //master array to put all arrays into one 
for (var i = 1; i < 9; i++){ //basically while i < 9 (1-8 since i have 8 classes and adds one each time link a counter) 
  /*lines kinda long so ill just say here that it uses jquery and writes all the class and the things in the "" are html to add on to them */  $("main").append("<a href = " + links[i] +">" + "<h3>" + masterArray[i][0] + masterArray[i][1] + masterArray[i][2] + masterArray[i][3] +"<h3>" + "</a>" + "<div style='line-height:5%;'>" /* this changes the size of the br because it seemed like too much with and too less without*/ + "<br>"+  "</div>")
} //closing the for statement