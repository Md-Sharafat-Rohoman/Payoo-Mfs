document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('muntaha siddika fariha')

    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);

    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);

    if(phoneNumber === '01615879508' && pinNumber === '1234'){
        console.log('your are login in');
        window.location.href = '/home.html'
    }
    else{
        alert('wrong pin number or pin')
    }





})