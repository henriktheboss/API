function klikk() {
    let pengin = inval.value;
    let amountField = document.getElementById("amount");
    if (amountField.value === "") {
        out.textContent = "Skriv inn tall";
        return; 
    }
    
    let amount = parseFloat(amountField.value);
    let valgtPeng = valutar.value;
    
    fetch("https://v6.exchangerate-api.com/v6/07e664c29b9b2782755ddd2d/latest/" + pengin)
        .then(response => {
            console.log(response.status);
            return response.json();
        })
        .then(data => {
            let conversion = data.conversion_rates[valutar.value];
            let result = (conversion * amount).toFixed(3); 
            let text = result + valgtPeng;
            out.textContent = text;
        });
}
