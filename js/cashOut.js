document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('faru moni')

    const cashoutInputPinNumber = document.getElementById('input-cash-out-pin').value;



    if (cashoutInputPinNumber === '1234') {

        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const cashOutInput = document.getElementById('input-cash-out').value;
        const cashOut = parseFloat(cashOutInput);

        

        // console.log(addMoneyNumber)
        const newBalance = balanceNumber - cashOut;

        // set the balance
        document.getElementById('account-balance').innerText = newBalance;



    }
    else {
        alert('failed to cash out. Please try again');
    }


})