let out = document.getElementById("out")
let valuttaInn = "NOK"
let valuttaUt = "USD"


function klikk(){
 fetch("https://v6.exchangerate-api.com/v6/07e664c29b9b2782755ddd2d/latest/" +valuttaInn)
	 .then(respons => {
		 console.log(respons.status)
		 return respons.json()
	 })
	 .then(data => {
		let amount = parseFloat(document.getElementById("amount").value)
		let text = amount+" "+valuttaInn+ " = "
		let conversion = data.conversion_rates[valuttaUt] 
		text += (conversion*amount) + valuttaUt
		out.textContent = text


	 })
	

}

