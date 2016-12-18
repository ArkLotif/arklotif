if ($(window).width() > 1024) {
$(window).scroll(function() {
	if ($(this).scrollTop() > 1){
		document.getElementById("Email").style.width = "40px";
		document.getElementById("Email").style.height = "40px";
		document.getElementById("Email").style.top = "30px";

		document.getElementById("PayPal").style.width = "40px";
		document.getElementById("PayPal").style.height = "40px";
		document.getElementById("PayPal").style.top = "30px";
		document.getElementById("PayPal").style.left = "20%";
		document.getElementById("PayPal").style.transform = "translateX(-20%)";

		document.getElementById("Logo").style.width = "100px";
		document.getElementById("Logo").style.height = "100px";

		document.getElementById("Twitter").style.width = "40px";
		document.getElementById("Twitter").style.height = "40px";
		document.getElementById("Twitter").style.top = "30px";
		document.getElementById("Twitter").style.left = "80%";
		document.getElementById("Twitter").style.transform = "translateX(-80%)";
		
		document.getElementById("Instagram").style.width = "40px";
		document.getElementById("Instagram").style.height = "40px";
		document.getElementById("Instagram").style.top = "30px";
		
		document.getElementById("Header").style.height = "100px";
	}

	else {
		document.getElementById("Email").style.width = "80px";
		document.getElementById("Email").style.height = "80px";
		document.getElementById("Email").style.top = "80px";

		document.getElementById("PayPal").style.width = "80px";
		document.getElementById("PayPal").style.height = "80px";
		document.getElementById("PayPal").style.top = "80px";
		document.getElementById("PayPal").style.left = "25%";
		document.getElementById("PayPal").style.transform = "translateX(-25%)";

		document.getElementById("Logo").style.width = "200px";
		document.getElementById("Logo").style.height = "200px";

		document.getElementById("Twitter").style.width = "80px";
		document.getElementById("Twitter").style.height = "80px";
		document.getElementById("Twitter").style.top = "80px";
		document.getElementById("Twitter").style.left = "75%";
		document.getElementById("Twitter").style.transform = "translateX(-75%)";
		
		document.getElementById("Instagram").style.width = "80px";
		document.getElementById("Instagram").style.height = "80px";
		document.getElementById("Instagram").style.top = "80px";
		
		document.getElementById("Header").style.height = "0px";
	}
})};