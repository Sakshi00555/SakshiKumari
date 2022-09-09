 
let imageArray5=["https://user-images.githubusercontent.com/83025741/189350616-b0656bf9-fa65-442f-99b0-dd1fa152ded5.PNG",
"https://user-images.githubusercontent.com/83025741/189350631-9701315a-773a-4f3d-8107-cd95ac236cf7.PNG",
"https://user-images.githubusercontent.com/83025741/189350637-c1ca694d-32a1-43f5-8e35-a5ae2ead735f.PNG",
"https://user-images.githubusercontent.com/83025741/189350649-86dc4975-d1ef-4f44-b3ff-9a2433970852.PNG"]
var imageCounter5=0;
var imageElement5=document.getElementById("images5");
function changeImage(){
imageElement5.setAttribute("src",imageArray5[imageCounter5]);
imageCounter5++;
console.log(imageCounter5)
if (imageCounter5 === imageArray5.length){
    imageCounter5=0;
    
}
}
var intervalHandle5=setInterval(changeImage, 2000);
imageElement5.onclick=function(){
clearInterval(intervalHandle5);
}