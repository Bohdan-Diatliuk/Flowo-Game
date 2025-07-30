function checkEmail() {
            let email = document.querySelector('#emailField').value;
            if(!email.includes('@')) alert('Where @?');
            else if(!email.includes('.')) alert('Where .?');
            else alert('Okay, very nice');
        }