let out = ""
let ut = document.getElementById("out")
let inn = document.getElementById("inn")


function klikk(){
 fetch("https://v6.exchangerate-api.com/v6/07e664c29b9b2782755ddd2d/latest/NOK")
	 .then(respons => {
		 //out += respons.status
		 return respons.json()
	 })
	 .then(data => {
	
		 
		 out += inn.value
		 out += "<br>" +(data.conversion_rates.USD * inn.value)


	 })
	
 ut.innerHTML = out
 out = ""
}

ut.value = out 