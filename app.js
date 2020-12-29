var billAmount = document.querySelector('#bill-amount');
var cashAmount = document.querySelector('#cash-amount');
var checkButton = document.querySelector('#check-button');
var resetButton = document.querySelector('#reset-button');
var listSection = document.querySelector('#list-section');
var unit = document.querySelector('#unit');

var notes = [2000, 500, 100, 20, 10, 5, 1];
var numberOfNotes = [0, 0, 0, 0, 0, 0, 0];




checkButton.addEventListener('click', getChange);
function getChange() {
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
        var listItem = document.createElement("div");
        listItem.className = 'list-item'
        var item = listSection.appendChild(listItem);
        item.innerHTML += `<span>` + notes[i] + `</span><span>` + numberOfNotes[i] + `</span>`
        console.log(item)

    }
}

resetButton.addEventListener('click', resetList);

function resetList() {
    billAmount.value = '';
    cashAmount.value = '';
    listSection.innerHTML = "";
}
