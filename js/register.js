function storeReg() {
    localStorage.setItem('registerDetails', JSON.stringify([firstname.value, lastname.value,
        email.value, password.value
    ]));
    localStorage.setItem('Type of user', JSON.stringify($('input[name="typeofUser"]:checked').val()));
    object1 = JSON.parse(localStorage.getItem('registerDetails'));
}

function check() {


    var pass1 = document.getElementById("password").value;
    var pass2 = document.getElementById("confirm_password").value;
    var ok = true;
    if (pass1 != pass2) {
        //alert("Passwords Do not match");
        document.getElementById("password").style.borderColor = "#E34234";
        document.getElementById("confirm_password").style.borderColor = "#E34234";
        ok = false;
        alert("Passwords dont match!")
    } else {}
    return ok;

}
