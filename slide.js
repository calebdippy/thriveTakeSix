var i=0; //Start point
var images=[];
var time=3000;
	 
//Image List
// images[0] = "young-farmers-image.png";
// images[1] = "surfing-for-farmers-image.png";
// images[2] = "groundswell-image.png";

//Image List
 images[0] = "mountain-background.jpg";
 images[1] = "tractor-background.jpg";
 images[2] = "harvister-background-image.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;