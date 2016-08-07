/*
Ylia Moridzadeh
23/07/2016
This program allows the user to continuously scroll through various pictures by clicking the 
previous and next buttons.
*/

//Activates functions Back and Next by clicking Previous and Next button
document.getElementById("previous").onclick = function(){
   goBack();
   }; 
document.getElementById("next").onclick = function(){
   goForward();
   };

//Sets the main image
var image = document.getElementById("main");

//Initializes variable i for goForward and goBack functions
var i = 0;

//Creates array of all images to be displayed on site
var imageArray = ["mainImage.jpg", "Amsterdam.jpg", "Florence.jpg",
   "Malaga.jpg", "Munich.jpg", "Prague.jpg", "Rigi.jpg"];

//Displays next image in array when user clicks Next button
goForward = function(){
   i++   
   if(i >= imageArray.length) {
      i = 0;  
   }    
      image.src=imageArray[i];
};

//Displays previous image in array when user clicks Previous button
goBack = function(){
   i--;   
   if(i < 0) {
      i = imageArray.length - 1;  
   }    
      image.src=imageArray[i];   
};

