if ($(window).width() > 1024) {
$(window).scroll(function() {
	if ($(this).scrollTop() > 50){
        //Scrolled//
        document.getElementById("Header").style.height = "128px";
        document.getElementById("Header").style.background = "#121e59";
        
        document.getElementById("Email").style.width = "54px";
        document.getElementById("Email").style.height = "54px";
        document.getElementById("Email").style.marginTop = "37px";
        
        document.getElementById("PayPal").style.width = "54px";
        document.getElementById("PayPal").style.height = "54px";
        document.getElementById("PayPal").style.marginTop = "37px";
        
        document.getElementById("Instagram").style.width = "54px";
        document.getElementById("Instagram").style.height = "54px";
        document.getElementById("Instagram").style.marginTop = "37px";
        
        document.getElementById("Twitter").style.width = "54px";
        document.getElementById("Twitter").style.height = "54px";
        document.getElementById("Twitter").style.marginTop = "37px";
        
        document.getElementById("Logo").style.width = "128px";
        document.getElementById("Logo").style.height = "88px";
        document.getElementById("Logo").style.marginTop = "20px";
	}

	else {
        //At Top//
        document.getElementById("Header").style.height = "256px";
        document.getElementById("Header").style.background = "url(arklotif.com/Assets/Header/Pattern.svg)";
        
        document.getElementById("Email").style.width = "108px";
        document.getElementById("Email").style.height = "108px";
        document.getElementById("Email").style.marginTop = "83px";
        
        document.getElementById("PayPal").style.width = "108px";
        document.getElementById("PayPal").style.height = "108px";
        document.getElementById("PayPal").style.marginTop = "83px";
        
        document.getElementById("Instagram").style.width = "108px";
        document.getElementById("Instagram").style.height = "108px";
        document.getElementById("Instagram").style.marginTop = "83px";
        
        document.getElementById("Twitter").style.width = "108px";
        document.getElementById("Twitter").style.height = "108px";
        document.getElementById("Twitter").style.marginTop = "83px";
        
        document.getElementById("Logo").style.width = "256px";
        document.getElementById("Logo").style.height = "176px";
        document.getElementById("Logo").style.marginTop = "40px";
	}
})};