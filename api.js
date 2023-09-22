let out = ""
let ut = document.getElementById("out")


function klikk(){
 fetch("https://v6.exchangerate-api.com/v6/07e664c29b9b2782755ddd2d/latest/NOK")
	 .then(respons => {
		 out += respons.status
		 return respons.json()
	 })
	 .then(data => {
	
		 out += "<br> "+data.result
	 })
	
 ut.innerHTML = out
 out = ""
}

ut.textContent = out