var imageString = "";
var images = [
				"https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif",
				"https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif",
				"https://media.giphy.com/media/eoxomXXVL2S0E/giphy.gif",
				"https://media.giphy.com/media/zDrQxFFgiiGoU/giphy.gif",
				"https://media.giphy.com/media/TYeHYI1GmF87m/giphy.gif",
				"https://media.giphy.com/media/8SFGuIfNzDJzW/giphy.gif",
				"https://media.giphy.com/media/oOTTyHRHj0HYY/giphy.gif",
				"https://media.giphy.com/media/l0HlvtIPzPdt2usKs/giphy.gif",
				"https://media.giphy.com/media/11xTvLtwCEA2sg/giphy.gif",
				"https://media.giphy.com/media/RH0dVMtJa8MGk/giphy.gif"
			];


for (i=0; i < images.length; i++) {	
	var currentImage;
	currentImage = images[i];

	imageString += `<div class="row">`;
	imageString += `<div class="col-sm-6 col-md-4">`;
	imageString += `<div class="thumbnail">`;
	imageString += `<img src="${currentImage}">`;
	imageString += `</div></div>`;
};

$("#container").append(imageString);
