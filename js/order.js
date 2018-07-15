//EventListner to run calcTotal function when "button" is clicked
 document.getElementById("button").addEventListener("click",  calcTotal, false);
	function calcTotal() {
		var itemTotal = 0;
		// targets the array of input elements
		var items = document.getElementsByTagName("input");
		//checks if the array is checked and if so it adds the value tp the itemTotal var
		for(var i = 0; i < items.length; i++) {
			if(items[i].checked) {
				itemTotal += (items[i].value * 1);
			}
		}
		//runs function to have 2 decimal spots
		itemTotal = formatNumber(itemTotal,2);
		//writes the amount to the html
		document.getElementById("total").innerHTML = "<strong>Your order total is $" +itemTotal + "!</strong>";
	}
		//function to place decimals correctly.
	function formatNumber(val, decimals) {
		return val.toLocaleString(undefined,
			{minimumFractionDigits: decimals,
			 maximumFractionDigits: decimals});
	}
