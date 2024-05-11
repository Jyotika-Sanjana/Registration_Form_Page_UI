

function changeColor(color) {
    $('body').css('backgroundColor', color);
    $('#colorModal').modal('hide'); // Close modal after selecting a color
}

// Phone number
const regExp = /[a-zA-Z]/g;
function numberValidation(val) {
    let phone = $("#phoneno").val();
    if (regExp.test(phone)) {
        let newMob = phone.replace(/[^0-9]/g, '');
        $("#phoneno").val(newMob);
        alert("Please enter in valid format");
    } else {
        $('#phoneno').removeClass().addClass('form-control');
    }
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function ValidateEmail() {
    let email = $("#uemail").val();
    if (!emailRegex.test(email)) {
        $('#uemail').removeClass().addClass('form-control');
        alert('Invalid email format');
    }
}



const passwordRegex = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[A-Z].*[A-Z])(?=.*[0-9].*[0-9]).{6,}$/;

function ValidatePassword() {
    let pswd = $('#password').val();

    if (!passwordRegex.test(pswd)) {
        alert("- At least 2 uppercase\n- At least 1 special character\n- At least 2 digits\n- Length must be at least 6 characters");
    } else {
        $('#password').removeClass().addClass('form-control');
    }
}


function CheckPassword() {
    var password = $("#password").val();
    var confirmPassword = $("#cfnpassword").val();
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

// Date of birth validation
function dobValidate() {
    var today = new Date();
    var nowyear = today.getFullYear();
    var nowmonth = today.getMonth();
    var nowday = today.getDate();
    var b = $("#dob").val();

    var birth = new Date(b);
    var birthyear = birth.getFullYear();
    var birthmonth = birth.getMonth();
    var birthday = birth.getDate();

    var age = nowyear - birthyear;
    var age_month = nowmonth - birthmonth;
    var age_day = nowday - birthday;

    if (age_month < 0 || (age_month === 0 && age_day < 0) || age > 18) {
        age = parseInt(age) - 1;
    }
    if ((age <= 18 && age_month <= 0 && age_day <= 0) || age < 18) {
        alert("Age should be 18 or more than 18 years. Please enter a valid Date of Birth");
		$("#dob").val(""); 
        return false;
    }
}

// Date of hiring validation
function validateDOH() {
    var todayhr = new Date();
    var hrdate = $("#doh").val();
    var selectedDate = new Date(hrdate);

    if (selectedDate > todayhr) {
        alert('Hiring date cannot be in the future.');
		$("#doh").val('')

        return false;
    } else {
        console.log('Hiring date is valid.');
        return true;
    }
}




// Form submission validation
function onSubmit() {
    if ($("#uName").val() === '') {
        alert('Enter Username First');
    } else if ($("#fName").val() === '') {
        alert('Enter Firstname');
    } else if ($("#LName").val() === '') {
        alert('Enter Lastname');
    } else if ($("#gender").val() === '') {
        alert('Please select gender');
    } else if ($("#dob").val() === '') {
        alert('Enter Date of birth');
    } else if ($("#doh").val() === '') {
        alert('Enter Date of Hiring');
    } else if ($("#phoneno").val() === '') {
        alert('Enter phone number');
    } else if ($("#uemail").val() === '') {
        alert('Enter Email Id');
    } else if ($("#password").val() === '') {
        alert('Enter password');
    } else if ($("#cfnpassword").val() === '') {
        alert('Enter password for confirmation');
    } else {
        
            alert('Success!');
           
}     
}

