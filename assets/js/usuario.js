fetch(`http://localhost:8080/user/auth`,{
    method: 'GET',
    headers: {
        'content-type': 'application/json',
        'Authorization': `${token}`
    }
}).then(resp => resp.json())
.then(data => {
    console.log(data);
    let div = document.querySelector('#userProfile');
    let userProfile = document.createElement('h5');
    userProfile.textContent = data.username;
    div.appendChild(userProfile);

    let div1 = document.querySelector('#emailP');
    let emailP = document.createElement('h5');
    emailP.textContent = data.email;
    div.appendChild(emailP);

    let input = document.querySelector('#inputID')
    const placeholder = input.placeholder;
    input.placeholder = data.name;

    let inputEMail = document.querySelector('#eMail')
    let placeholderName = inputEMail.placeholder;
    inputEMail.placeholder = data.email;

    let inputPhone = document.querySelector('#phone')
    let placeholderPhone = inputPhone.placeholder;
    inputPhone.placeholder = data.phone;
    
    let inputAge = document.querySelector('#age')
    let placeholderAge = inputAge.placeholder;
    inputAge.placeholder = data.date;

    let inputStreet = document.querySelector('#Street')
    let placeholderStreet = inputStreet.placeholder;
    inputStreet.placeholder = data.street;
    
    let inputCity = document.querySelector('#city')
    let placeholderCity = inputCity.placeholder;
    inputCity.placeholder = data.country;

    let inputState = document.querySelector('#state')
    let placeholderState = inputState.placeholder;
    inputState.placeholder = data.state;

    let inputZip = document.querySelector('#zip')
    let placeholderZip = inputZip.placeholder;
    inputZip.placeholder = data.cp;

    }) 

  
    

   