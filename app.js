var billAmount = document.querySelector('#bill-amount');
var cashAmount = document.querySelector('#cash-amount');
var checkButton = document.querySelector('#check-button');
var resetButton = document.querySelector('#reset-button');
var denoSection = document.querySelector('#deno-section');

var notes = [2000, 500, 100, 20, 10, 5, 1];
var numberOfNotes = [0, 0, 0, 0, 0, 0, 0];


checkButton.addEventListener('click', getChange);

function getChange() {
    denoSection.innerHTML = "";

    var bill = billAmount.value;
    var amount = cashAmount.value;
    var returnAmount = amount - bill;
    //console.log(returnAmount)
    for (let i = 0; i < notes.length; i++) {
        if (notes[i] <= returnAmount) {
            numberOfNotes[i] = Math.floor(returnAmount / notes[i]);
            console.log(numberOfNotes[i]);
            returnAmount = returnAmount - notes[i] * numberOfNotes[i];
        }
    }

    for (let i = 0; i < numberOfNotes.length; i++) {
        var listItem = document.createElement("ul");
        listItem.className = 'list-item'
        var item = denoSection.appendChild(listItem);
        item.innerHTML += `<li>No of &#x20B9;&nbsp;` + notes[i] + ` &nbsp;: &nbsp;` + numberOfNotes[i] + `</li>`
        console.log(item)

    }
}

resetButton.addEventListener('click', resetList);

function resetList() {
    billAmount.value = '';
    cashAmount.value = '';
    denoSection.innerHTML = "";
}
