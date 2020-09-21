/*function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);
    //ha nem írunk darabszámot, NaN az eredménye, ezért kell még egy feltétel:
    //  if(isNaN(amountNumber)){
    //     amountNumber = 0;
    //  }
    //De ezt lehet egy 3 operandusos kóddal írni, egyszerűsített if-else-es szerkezet:
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    //
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
        //return; (nem is kell, mert végül else ágba tettük a rendes működést)
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        let amount = amountNumber * price; //itt helyettesítettük végül az amountNumer változóval a parseInt(amountInput.value) -t
        showAmount.innerHTML = amount;
    } 
}
*/
//Érdemes már ezt a kódot szétbontani, túl nagy a függvény, 1 inkább csak 5-6 soros legyen, szervezzük szét

function calcAmount() {
  let price = 1000;
  let amountInput = document.querySelector("input[name='amount-input']");
  let amountNumber = parseInt(amountInput.value);
  amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

  showSumPrice(price, amountNumber);
}

function showSumPrice(price, amountNumber) {
  amountNumber = amountNumber || 0;

  if (amountNumber > 10) {
    alert("Maximum 10 terméket vásárolhat!");
    //return; (nem is kell, mert végül else ágba tettük a rendes működést)
  } else if (amountNumber < 1) {
    alert("Minimum 1 terméket kell vásárolnia!");
  } else {
    let showAmount = document.querySelector("span.show-amount");
    let amount = amountNumber * price + radioCheck() * amountNumber;
    //itt helyettesítettük végül az amountNumer változóval a parseInt(amountInput.value) -t

    showAmount.innerHTML = amount;

  }
}

function radioCheck() {
  let radioButtons = document.querySelector("input[name='optradio']:checked");
  let radioValue = parseInt(radioButtons.value);
  return radioValue;
}