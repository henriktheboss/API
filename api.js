let out = document.getElementById("out")
let valutar = document.getElementById("valutar")
let inval = document.getElementById("inval")



function klikk(){
	let pengin = inval.value;
 fetch("https://v6.exchangerate-api.com/v6/07e664c29b9b2782755ddd2d/latest/" +pengin)
	 .then(respons => {
		 console.log(respons.status)
		 return respons.json()
	 })
	 .then(data => {
		let amount = parseFloat(document.getElementById("amount").value)
		
		let valgtPeng = valutar.value;
		let conversion = data.conversion_rates[valutar.value] 
		let text = ""+(conversion*amount) + valgtPeng
		out.textContent = text


	 })
	

}

