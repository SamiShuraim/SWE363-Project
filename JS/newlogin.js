function showHidePassword() {
    let passwordInputElement = document.getElementById("password");
    let toggleIcon = document.getElementById("toggleEye");
    if (passwordInputElement.type === "password") {
      passwordInputElement.type = "text";
      toggleIcon.className = "fa fa-eye-slash";  // Change icon to 'eye-slash'
    } else {
      passwordInputElement.type = "password";
      toggleIcon.className = "fa fa-eye";  // Change icon back to 'eye'
    }
  }
  

function loginBtnCheck() { 
    let EmailPhoneNumberInputElement = document.getElementById("Email-PNumber");
    let passwordInputElement = document.getElementById("password");
    if (
        (
            EmailPhoneNumberInputElement.value.includes("@") ||
            (
                EmailPhoneNumberInputElement.value.trim().length == 10 &&
                !EmailPhoneNumberInputElement.value.includes("@")
            )
        ) &&
        passwordInputElement.value.length >= 8
    ) {
        return;
    }
}


function signupBtnCheck() {
    let EmailInputElement = document.getElementById("Email");
    let passwordInputElement = document.getElementById("password");
    let PhoneNumberElement = document.getElementById("PNumber")
    if (
        (
            PhoneNumberElement.value.length == 10 &&
            startsWith05(PhoneNumberElement.value)
        )
        &&
        (
            EmailInputElement.value.includes("@") ||
            (
                EmailInputElement.value.trim().length == 10 &&
                !EmailInputElement.value.includes("@")
            )
        ) &&
        passwordInputElement.value.length >= 8
    ) {
        return;
    }
}
function startsWith05(number) {
    return number.toString().startsWith('05');
}
