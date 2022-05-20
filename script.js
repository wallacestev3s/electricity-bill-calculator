window.start_loader = function() {
    const loader = document.getElementById('loader-holder')
    loader.style.display = 'flex';
}
window.end_loader = function() {
    const loader = document.getElementById('loader-holder')
    loader.style.display = 'none';
}

window.onload = function() {
    setTimeout(() => {
        end_loader()
    }, 500)

    const unitForm = document.getElementById('calculate-units-form')
    unitForm.addEventListener('submit', function(e) {
        e.preventDefault()
        start_loader();
        const unitsAmount = document.getElementById('units-amount').value;
        const vat = document.getElementById('vat-amount').value;
        const PayableDays = document.getElementById('days-amount').value;
        var monthly = 0,
            vatCost = 0,
            total = 0,
            totalInterest = 0,
            billWoVat = 0;
            billWoVat = (parseFloat(unitsAmount) * 0.20 + (parseFloat(PayableDays) *0.04));
            vatCost = parseFloat(billWoVat) * (parseFloat(vat) / 100);
        total = parseFloat(billWoVat) + parseFloat(vatCost);
        totalInterest = parseFloat(billWoVat) + parseFloat(vatCost);
        setTimeout(() => {
            document.getElementById('units').textContent = parseFloat(unitsAmount).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('vat-rate').textContent = parseFloat(vat).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 }) + "%";
            document.getElementById('billing-days').textContent = parseFloat(PayableDays).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 }) + (PayableDays > 1 ? " Days" : "")
            document.getElementById('bill-wo-vat').textContent = parseFloat(billWoVat).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('vat-cost').textContent = parseFloat(vatCost).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('total-bill').textContent = parseFloat(totalInterest).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('result').style.display = 'table';
            document.getElementById('reset-btn').style.display = 'block';
            end_loader()
        }, 500)

    })
    unitForm.addEventListener('reset', function(e) {
        start_loader();
        setTimeout(() => {
            document.getElementById('units').textContent = ""
            document.getElementById('vat-rate').textContent = ""
            document.getElementById('billing-days').textContent = ""
            document.getElementById('bill-wo-vat').textContent = ""
            document.getElementById('vat-cost').textContent = ""
            document.getElementById('total-bill').textContent = ""
            document.getElementById('result').style.display = 'none';
            document.getElementById('reset-btn').style.display = 'none';
            end_loader()
        }, 500)
    })
}

