function ajaxFunction(){
	let ajaxRequest;  // The variable that makes Ajax possible!
	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}

    ajaxRequest.onreadystatechange = function(){
        if(ajaxRequest.readyState == 4){
            // Get the data from the server's response
            document.myform.time.value = ajaxRequest.responseText;
        }
    }
    ajaxRequest.open("GET", "serverTime.php", true);
    ajaxRequest.send();
}