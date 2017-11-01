    function submit() {
    	console.log("checking if it works")
        var x = document.getElementById('robotproof').value
        console.log(x)
        if (/\d/.test(x) == true) {
        	console.log("answer contains a digit and is therefore robotproof")
            document.getElementById("title").innerHTML = "Thank you for your message.<br>I will get back to you asap!"
            } 
        else alert("Are you sure you've included a digit?")
        }