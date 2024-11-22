let form = "";
let Uname = "";
let email = "";
let password = "";
let cpassword = "";
let done = "";
let dataArr = [];

function check() {
  form = document.querySelector("#form");
  Uname = document.querySelector("#username");
  email = document.querySelector("#email");
  password = document.querySelector("#password");
  cpassword = document.querySelector("#cpassword");
  done = true;

  validatePasswordInputs();
  validateUnameInputs();
  validateEmailInputs();

  if (done == true) {
    alert("Registered Successfully");

    var data = {
      name: "",
      email: "",
      password: "",
    };

    data.name = Uname.value.trim();
    data.email = email.value.trim();
    data.password = password.value.trim();
    dataArr.push(data);
    console.log(dataArr);
    console.log(data);
    document.querySelector("#form").reset();
  }
}

function validatePasswordInputs() {
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();
  if (passwordVal.length < 8) {
    done = false;
    document.querySelector(".Perror").innerHTML =
      "password must be 8 character";
  } else if (passwordVal !== cpasswordVal) {
    done = false;
    document.querySelector(".Cerror").innerHTML = "password does not match";
  } else if (passwordVal == cpasswordVal) {
    document.querySelector(".Perror").innerHTML = " ";
    document.querySelector(".Cerror").innerHTML = " ";
  } else {
    return;
  }
}
function validateUnameInputs() {
  const UnameVal = Uname.value.trim();
  if (UnameVal == "") {
    done = false;
    document.querySelector(".Uerror").innerHTML = "Please enter Username";
  } else {
    document.querySelector(".Uerror").innerHTML = " ";
  }
}

function validateEmailInputs() {
  const emailVal = email.value.trim();
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (validRegex.test(emailVal) == true) {
    document.querySelector(".Eerror").innerHTML = " ";
  } else {
    done = false;
    document.querySelector(".Eerror").innerHTML =
      "Please enter correct email format";
  }
}
