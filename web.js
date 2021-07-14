var x = prompt("What is your name?")
alert("Welcom To Space Craft  "+x)

var favCom = prompt("What is your favorite space company? (Nasa, Spacex, Blue Origin, Orbital) ")

if(favCom == 'Nasa'){
  document.write("<div>" + "<h3>" +favCom + "</h3>" + "<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.gaxmUbWCCdUBhSRwOM1MYwHaLI%26pid%3DApi&f=1' width='400' height='500' />" + "</div>")

}
else if(favCom == 'SpaceX'){
 document.write("<div>" + "<h3>" +favCom + "</h3>" + "<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbgr.com%2Fwp-content%2Fuploads%2F2020%2F12%2FBGRpic-Recovered-Recovered-3.jpg%3Fquality%3D70%26strip%3Dall&f=1&nofb=1' width='400' height='500' />" + "</div>")

}
else if(favCom == 'Blue Origin'){
document.write("<div>" + "<h3>" +favCom + "</h3>" + "<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff5%2Fea%2F8d%2Ff5ea8dd2206f7a974978858c56e0e5c8.jpg&f=1&nofb=1' width='400' height='500' />" + "</div>")
 
}
else if(favCom == 'Orbital'){
document.write("<div>" + "<h3>" +favCom + "</h3>" + "<img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.spaceflightinsider.com%2Fwp-content%2Fuploads%2F2014%2F04%2FAntares-Orbital-Sciences-Corporation-Wallops-Flight-Facility-WFF-Pad-0a-NASA-Commercial-Resupply-Services-photo-credit-Jason-Rhian-SpaceFlight-Insider.png&f=1&nofb=1' width='400' height='500' />" + "</div>")
  
}
else{
    alert("Sorry!, you will not find information about " + favCom+  " here.")
}