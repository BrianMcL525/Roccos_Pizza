//starts function on page load
window.onload = function() {
	var i = 2;
	//function to change the pictures
	function setPics() {
		if ( i <= 3) {//puts the new pictures in the html
			document.getElementById("side_pics").innerHTML = "<img class= 'pics' src='imgs/sides" + i +".png' alt='sides' />";
			document.getElementById("chicken_pics").innerHTML = "<img class= 'pics' src='imgs/chicken" + i +".png' alt='chicken' />";
			document.getElementById("pizza_pics").innerHTML = "<img class= 'pics' src='imgs/pizza" + i + ".png' alt='pizza' />";		
		} else { //places inital image and restarts the counter
			document.getElementById("side_pics").innerHTML = "<img class= 'pics' src='imgs/sides1.png' alt='sides' />";
			document.getElementById("chicken_pics").innerHTML = "<img class= 'pics' src='imgs/chicken1.png' alt='chicken' />";
			document.getElementById("pizza_pics").innerHTML = "<img class= 'pics' src='imgs/pizza1.png' alt='pizza' />";		
			i = 1;
		}
	i++; 
	}
	//runs the setPics Function every 4 seconds
	setInterval(setPics, 4000);
}