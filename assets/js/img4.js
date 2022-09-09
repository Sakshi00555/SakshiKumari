 
let imageArray4=["https://user-images.githubusercontent.com/83025741/189347444-4bcf22ea-9242-475e-aa39-e203d1a19c20.PNG",
"https://user-images.githubusercontent.com/83025741/189347453-84eb834c-7a3d-4e50-8aca-2804ca9808db.PNG",
"https://user-images.githubusercontent.com/83025741/189347463-5b0c91fb-1013-431b-8820-42c6220f07e3.PNG",
"https://user-images.githubusercontent.com/83025741/189347473-523145a1-6956-45d5-83b5-97fad5ee3028.PNG"]
var imageCounter4=0;
var imageElement4=document.getElementById("images4");
function changeImage(){
imageElement4.setAttribute("src",imageArray4[imageCounter4]);
imageCounter4++;
console.log(imageCounter4)
if (imageCounter4 === imageArray4.length){
    imageCounter4=0;
    
}
}
var intervalHandle4=setInterval(changeImage, 2000);
imageElement4.onclick=function(){
clearInterval(intervalHandle4);
}