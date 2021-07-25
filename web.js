var x = prompt("What is your name?")
alert("Welcome To Space Craft  "+x)

var favCom = prompt("What is your favorite space company? (Nasa, SpaceX, Blue Origin, Orbital) ")

function isExists(){

var comp = prompt("Type here to check if there is a company you want exists in our page")

if (comp == 'Nasa' || comp == 'nasa' || comp == 'SpaceX' || comp == 'Spacex' || comp == 'Blue Origin' || comp == 'blue origin' || comp == 'Orbital' || comp == 'orbital')
  
alert (" it's exists")

else{
  alert("Sorry its not exists here, Come back later")
  }
} 
isExists();

while(favCom != 'Nasa' && favCom != 'SpaceX' && favCom != 'Blue Origin' && favCom != 'Orbital'){

  favCom = prompt("Please Enter one of these companies, Nasa, Spacex, Blue Origin, Orbital")
}
var picNum = prompt("How many photos you would like to see for " + favCom + " Rocket ?")

while(picNum > 10){

 picNum = prompt("Oh, That will crash my website :(, Please Enter a number equal or less than 10!")
}

if(favCom == 'Nasa'){
  for(var i = 1; i <= picNum; i++){
  document.write("<div>" + "<h3 style ='color: white' >" +favCom + " " +i+ "</h3>" + "<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.gaxmUbWCCdUBhSRwOM1MYwHaLI%26pid%3DApi&f=1' width='400' height='500' />" + "</div>")
  }
}
else if(favCom == 'SpaceX'){
  for(var i = 1; i <= picNum; i++){
 document.write("<div>" + "<h3 style ='color: white'>" +favCom + " " + i +  "</h3>" + "<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbgr.com%2Fwp-content%2Fuploads%2F2020%2F12%2FBGRpic-Recovered-Recovered-3.jpg%3Fquality%3D70%26strip%3Dall&f=1&nofb=1' width='400' height='500' />" + "</div>")
   }
}
else if(favCom == 'Blue Origin'){
  for(var i = 1; i <= picNum; i++){
document.write("<div>" + "<h3 style ='color: white'  >" +favCom + " " +i +"</h3>" + "<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff5%2Fea%2F8d%2Ff5ea8dd2206f7a974978858c56e0e5c8.jpg&f=1&nofb=1' width='500' height='500' />" + "</div>")
  }
}

else if(favCom == 'Orbital'){
  for(var i = 1; i <= picNum; i++) {
document.write("<div>" + "<h3 style ='color: white' >" +favCom + " " +i +"</h3>" + "<img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.spaceflightinsider.com%2Fwp-content%2Fuploads%2F2014%2F04%2FAntares-Orbital-Sciences-Corporation-Wallops-Flight-Facility-WFF-Pad-0a-NASA-Commercial-Resupply-Services-photo-credit-Jason-Rhian-SpaceFlight-Insider.png&f=1&nofb=1' width='400' height='500' />" + "</div>")
 }
}

else{
    alert("Sorry!, you will not find information about " + favCom+  " here.")
}
 