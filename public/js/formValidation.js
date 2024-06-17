// document.getElementById('loginForm').addEventListener('submit', function(event) {

//     event.preventDefault();

//     const email = document.getElementById('exampleInputEmail1').value.trim();
//     const password = document.getElementById('exampleInputPassword1').value.trim();
//     const checkbox = document.getElementById('exampleCheck1');
//     const counterSpan = document.getElementById('loginCount');
//     let currentCount = parseInt(counterSpan.textContent, 10);
    
//     currentCount += 1;

//     if (email === '' || password === '') {
//         alert('Email and password cannot be empty.');
//     }
//     else if(!checkbox.checked){
//         alert('Please check the checkbox.');
//     } else {
//         counterSpan.textContent = currentCount;
//         alert('Form submitted successfully!');
//     }
// });



// document.getElementById('registerForm').addEventListener('submit', function(event) {
//     event.preventDefault();


//     const firstName = document.getElementById('inputFirstName4').value.trim();
//     const LastName = document.getElementById('inputLastName4').value.trim();
//     const DOB = document.getElementById('inputDOB').value.trim();
//     const email = document.getElementById('inputEmail4').value.trim();
//     const password = document.getElementById('inputPassword4').value.trim();
//     const confirmPassword = document.getElementById('inputConfirmPassword4').value.trim();
//     const address = document.getElementById('inputAddress').value.trim();
//     const city = document.getElementById('inputCity').value.trim();
//     const zip = document.getElementById('inputZip').value.trim();
//     const checkbox = document.getElementById('gridCheck');

    
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, '0'); 
//     const day = String(today.getDate()).padStart(2, '0');

//     const formattedDate = `${year}-${month}-${day}`;



//     if (email === '' || password === '' || firstName ==='' || LastName === '' || DOB === '' || confirmPassword === '' || address === '' || city === '' || zip === '') {
//         alert('Please fill all the entites.');
//     }else if(DOB > formattedDate){
//         alert('Date Of Birth should be before the todays date.');
//     }else if(!checkbox.checked){
//         alert('Please check the checkbox.');
//     }else if(password !== confirmPassword){
//         alert('Password and Confirm Password are not same.');
//     }else {
//         alert('Form submitted successfully!');
//     }
// });


// document.getElementById('enquiryForm').addEventListener('submit', function(event) {
//     event.preventDefault();

    
//     const name = document.getElementById('enquiryName').value.trim();
//     const email = document.getElementById('enquiryEmail').value.trim();
//     const phoneNumber = document.getElementById('enquiryPhoneNumber').value.trim();

    
//     if (email === '' || name === '' || phoneNumber === '') {
//         alert('Name, email and phone number cannot be empty.');
//     }else {
        
//         alert('Form submitted successfully!');
//     }
// });


// document.getElementById('registerButton').addEventListener('click', function() {
//     window.location.href = 'register.html'; 
// });

// document.getElementById('registerButton').addEventListener('click', function() {
//     document.getElementById('exampleModal').classList.add('hidden');
//     document.getElementById('exampleModal1').classList.remove('hidden');
// });