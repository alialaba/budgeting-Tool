/* Instructions:

1. Wire up the budgeting tool so it tells the user whether or 
not they can afford an item based on their available funds. 💸
2. Style it as you wish 💅 

*/
let btn = document.querySelector("button");
let costPrice = document.getElementById('itemPrice');
let fundSaved = document.getElementById("fund");
let displayOutput = document.getElementById("output");
btn.addEventListener("click", () => {
    let funding = parseFloat(fundSaved.value);
    let cp = parseFloat(costPrice.value);
    if (funding > 0 && cp > 0) {
        funding >= cp ? displayOutput.textContent = "You can get some item" :
            displayOutput.textContent = "Keep funding you will be fine 💸"

    }
})