document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2 get the email
    const emailField = document.getElementById('user-name')
    const email = emailField.value;
    
    // step-3 get password
    const passwordFileld = document.getElementById('user-password')
    const password = passwordFileld.value;
    // step-4 verify email and password
    if(email === 'sontan@bap.com' && password === 'secret'){
       window.location.href = 'bank.html'
    }
    else{
        alert('invalid user')
    }
})