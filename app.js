var amount = document.getElementById("amount");
var type = document.getElementById("type");
var desc = document.getElementById("desc");
var date = document.getElementById("date");
var table = document.getElementById("table");
var income = 0;
var expense = 0;
var total;

function transaction() {
    // Validation checks
    if (!amount.value) {
        alert("Please enter an amount.");
        return;
    }
    if (!type.value) {
        alert("Please select a type.");
        return;
    }
    if (!desc.value) {
        alert("Please enter a description.");
        return;
    }
    if (!date.value) {
        alert("Please enter a date.");
        return;
    }

    console.log('amount', amount.value);
    console.log("type", type.value);

    if (type.value === 'income') {
        income += parseInt(amount.value);
        console.log('income', income);
    } else {
        expense += parseInt(amount.value);
        console.log('expense', expense);
    }

    total = income - expense;
    table.innerHTML += `
        <tr>
            <td>${type.value}</td>
            <td>${amount.value}</td>
            <td>${desc.value}</td>
            <td>${date.value}</td>
        </tr>
    `;
    
    // Clear the input fields
    amount.value = '';
    desc.value = '';
    date.value = '';

    console.log('total', total);
}
