document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const inputAddMoney = document.getElementById('input-add-money').value;
    console.log(inputAddMoney);

    const inputPinNumber = document.getElementById('input-pin-number').value;
    console.log(inputPinNumber);

    if(inputPinNumber === '1234'){
        console.log('adding money to your account');

        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        // console.log(balanceNumber)
        const addMoneyNumber = parseFloat(inputAddMoney);
        // console.log(addMoneyNumber)
        const newBalance = balanceNumber + addMoneyNumber;
        
        // set the balance
        document.getElementById('account-balance').innerText = newBalance;



    }
    else{
        alert('failed to add money! please try again');
    }





})