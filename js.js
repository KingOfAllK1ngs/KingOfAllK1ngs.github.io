let email = document.querySelector('input[type="email"]'),
  fio = document.querySelector('input[name="ФИО"]'),
  date = document.querySelector('input[type="date"]'),
  time = document.querySelector('input[type="time"]'),
  submit = document.querySelector('button[type="submit"]'),
  radioButtons = document.querySelectorAll('input[type="radio"]'),
  radiofield = document.querySelector(".radiofield"),
  myForm = document.querySelector('.myform'),
  shower = document.getElementById('shower');

function unFilledField(a, b) {
  a.classList.add(b);
}

function filledField(a, b) {
  a.classList.remove(b);
}

function validateInputEmail() {
  if (
    email.value == "" ||
    email.value == " " ||
    email.value.length == 0 ||
    email.value.indexOf("@") == -1 ||
    email.value.length <= 11
  ) {
    unFilledField(email, "unFilled");
  } else {
    filledField(email, "unFilled");
  }
}

function validateInputFio() {
  if (
    fio.value == "" ||
    fio.value == " " ||
    fio.value.length == 0 ||
    fio.value.length <= 10
  ) {
    unFilledField(fio, "unFilled");
  } else {
    filledField(fio, "unFilled");
  }
}
radiofield.addEventListener("click", function () {
  unFilledField(radiofield, "unFilledField");
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked == true) {
      filledField(radiofield, "unFilledField");
    }
  }
});

date.addEventListener("click", function () {
  setInterval(function () {
    if (date.value == "") {
      unFilledField(date, "unFilled");
    } else {
      filledField(date, "unFilled");
    }
  }, 100);
});

time.addEventListener("click", function () {
  setInterval(function () {
    if (time.value == "") {
      unFilledField(time, "unFilled");
    } else {
      filledField(time, "unFilled");
    }
  }, 100);
});

setInterval(function () {
  if (
    email.value == "" ||
    email.value == " " ||
    email.value.length == 0 ||
    email.value.indexOf("@") == -1 ||
    email.value.length <= 11 ||
    fio.value == "" ||
    fio.value == " " ||
    fio.value.length == 0 ||
    fio.value.length <= 10 ||
    date.value == "" ||
    time.value == ""
  ) {
    submit.setAttribute("disabled", "disabled");
  } else {
    submit.removeAttribute("disabled", "disabled");
  }
});

function hideshow() {
    myForm.style.cssText="animation:hierrr 1s 1 linear;display:none;";
    shower.style.cssText="display:block;animation:showwww 1s 1 linear;";
}
