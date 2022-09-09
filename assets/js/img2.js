 
let imageArray2=["https://user-images.githubusercontent.com/83025741/189307619-58dbf446-466c-4e77-985a-b76a6622f3d0.PNG",
"https://user-images.githubusercontent.com/83025741/189307640-7ef4d692-86be-447c-86c2-e0d3d2332e05.PNG",
"https://user-images.githubusercontent.com/83025741/189307650-0e24d5e7-a96b-472c-9b8f-8bd3e24b0ff9.PNG",
"https://user-images.githubusercontent.com/83025741/189307681-b551130f-c108-4081-be85-694b46ba4807.PNG"]
var imageCounter1=0;
var imageElement1=document.getElementById("images2");
function changeImage(){
imageElement1.setAttribute("src",imageArray2[imageCounter1]);
imageCounter1++;
console.log(imageCounter1)
if (imageCounter1 === imageArray2.length){
    imageCounter1=0;
    
}
}
var intervalHandle1=setInterval(changeImage, 2000);
imageElement1.onclick=function(){
clearInterval(intervalHandle1);
}