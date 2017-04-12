var name = document.getElementById('username');
var pw = document.getElementById('pw');

function store() {
    localStorage.setItem('savedData', JSON.stringify([username.value,password.value]));
    localStorage.setItem('Type of user',JSON.stringify($('input[name="options"]:checked').val()));
    object1 = JSON.parse(localStorage.getItem('savedData'));
}

function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('pw');

    // check if stored data from register-form is equal to data from login form
		if(username.value == storedName && password.value == storedPw) {
        alert('You are logged in.');
    }else {
        alert('ERROR.');
    }
}

$('#radioBtn a').on('click', function(){
    var sel = $(this).data('title');
    var tog = $(this).data('toggle');
    $('#'+tog).prop('value', sel);

    $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
    $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
})
