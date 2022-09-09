 
let imageArray3=["https://user-images.githubusercontent.com/83025741/189305672-5a6f3cdf-b3a7-409c-bbf9-fe3489e10c1f.PNG",
"https://user-images.githubusercontent.com/83025741/189342103-a7261353-e902-452f-b535-81e01ec85d64.PNG",
"https://user-images.githubusercontent.com/83025741/189342129-80261444-0f1e-43bd-a031-ac2ad1c21440.PNG"]
var imageCounter3=0;
var imageElement3=document.getElementById("images3");
function changeImage(){
imageElement3.setAttribute("src",imageArray3[imageCounter3]);
imageCounter3++;
console.log(imageCounter3)
if (imageCounter3 === imageArray3.length){
    imageCounter3=0;
    
}
}
var intervalHandle3=setInterval(changeImage, 2000);
imageElement3.onclick=function(){
clearInterval(intervalHandle3);
}