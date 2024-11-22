let form = "";
let Email = "";
let password = "";
let verifyEmail = "user@email.com";
let verifyPassword = "12345678";
let dataArr = [];
let success = "";

function login() {
  form = document.querySelector("#form");
  Email = document.querySelector("#loginEmail");
  password = document.querySelector("#loginPassword");
  success = true;

  validateEmailInputs();
  validatepassword();

  if (success == true) {
    alert("Login Successfully.\nThis is for test purpose.");
    var data = {
      email: "",
      password: "",
    };
    data.email = Email.value.trim();
    data.password = password.value.trim();
    dataArr.push(data);
    console.log(dataArr);
    console.log(data);
    document.querySelector("#form").reset();
  }
  else if( success == "check"){
    
  }
  else {
    alert(
      "Please enter correct Email Id and Password.\nEmail Id - user@email.com \nPassword - 12345678"
    );
  }
}

function validateEmailInputs() {
  const emailVal = Email.value.trim();
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (validRegex.test(emailVal) == true) {
    document.querySelector(".Eerror").innerHTML = " ";
    validateLogin();
  } else {
    document.querySelector(".Eerror").innerHTML =
      "Please enter correct email format";
      success = 'check'
  }
}

function validateLogin() {
  let emailVal = Email.value.trim();

  if (emailVal !== verifyEmail) {
    success = false;
  } else {
  }
}

function validatepassword() {
  const passwordVal = password.value.trim();
  if (passwordVal.length < 1) {
    document.querySelector(".Perror").innerHTML = " Please enter the password";
    success = 'check';
  } else {
    document.querySelector(".Perror").innerHTML = " ";
    checkPassword();
  }
}

function checkPassword() {
  const passwordVal = password.value.trim();
  if (passwordVal !== verifyPassword) {
    success = false;
  } else {

  }
}
