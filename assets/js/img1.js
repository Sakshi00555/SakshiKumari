 
let imageArray1=["https://user-images.githubusercontent.com/83025741/172038953-91773d8f-1626-4106-b366-c9c82f5259bf.PNG",
"https://user-images.githubusercontent.com/83025741/172038763-650f2e0d-98c1-4694-9fd3-18f10a8b3a87.PNG",
"https://user-images.githubusercontent.com/83025741/172038852-5cfeaa1b-57da-4929-b104-82b05bbc242f.PNG",
"https://user-images.githubusercontent.com/83025741/172038859-c593bcb7-74fe-4a6a-b5b0-ffcaf09ce191.PNG"]
var imageCounter=0;
var imageElement=document.getElementById("images");
function changeImage(){
imageElement.setAttribute("src",imageArray1[imageCounter]);
imageCounter++;
console.log(imageCounter)
if (imageCounter === imageArray1.length){
    imageCounter=0;
    
}
}
var intervalHandle=setInterval(changeImage, 2000);
imageElement.onclick=function(){
clearInterval(intervalHandle);
}