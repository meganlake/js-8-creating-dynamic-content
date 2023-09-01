let box;

let header = document.createElement('h1');
header.textContent = 'Waranty Information'
document.body.appendChild(header);

let firstName = document.createElement('label');
firstName.innerHTML = 'First Name'
document.body.appendChild(firstName);
box = document.createElement('input');
box.setAttribute('type', 'text');
document.body.appendChild(box);

let lastName = document.createElement('label');
lastName.innerHTML = ' Last Name'
document.body.appendChild(lastName);
box = document.createElement('input');
box.setAttribute('type', 'text');
document.body.appendChild(box);

let companyName = document.createElement('label');
companyName.innerHTML = ' Company Name'
document.body.appendChild(companyName);
box = document.createElement('input');
box.setAttribute('type', 'text');
document.body.appendChild(box);

let email = document.createElement('label');
email.innerHTML = ' Email'
document.body.appendChild(email);
box = document.createElement('input');
box.setAttribute('type', 'email');
document.body.appendChild(box);

let phoneNumber = document.createElement('label');
phoneNumber.innerHTML = ' Phone Number'
document.body.appendChild(phoneNumber);
box = document.createElement('input');
box.setAttribute('type', 'text');
document.body.appendChild(box);

let faxNumber = document.createElement('label');
faxNumber.innerHTML = ' Fax Number'
document.body.appendChild(faxNumber);
box = document.createElement('input');
box.setAttribute('type', 'text');
document.body.appendChild(box);

let Address = document.createElement('label');
Address.innerHTML = ' Address'
document.body.appendChild(Address);
box = document.createElement('input');
box.setAttribute('type', 'text');
document.body.appendChild(box);