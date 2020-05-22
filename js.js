let email = document.querySelector('input[type="email"]'),
    fio = document.querySelector('input[name="ФИО"]'),
    data = document.querySelector('input[type="date"]'),
    time = document.querySelector('input[type="time"]'),
    submit = document.querySelector('button[type="submit"]');

function unFilledField(a, b) {
    a.classList.add(b);
}

function filledField(a, b) {
    a.classList.remove(b);
}

function validateInput() {
    if (email.value == '' || email.value == ' ' || email.value.length == 0 || email.value.indexOf('@') == -1 || email.value.length <= 11) {
        unFilledField(email, 'unFilled');
    } else {
        filledField(email, 'unFilled');
    }
}