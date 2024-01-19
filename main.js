const errorMsg = document.querySelector(".error-msg");
const input = document.getElementById("email");
const form = document.getElementById("subscribe");
const span = document.getElementById("con-mail");

form.onsubmit = function () {
  let inputValue = document.getElementById("email").value;
  let emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let valid = emailRe.test(inputValue);
  if (valid === false || inputValue == "") {
    errorMsg.innerHTML = "Valid email required";
    input.style.cssText =
      "border-color: hsl(4, 100%, 67%); background-color: rgb(255 98 87 / 10%); color: hsl(4, 100%, 67%)";
    return false;
  } else {
    span.innerHTML = inputValue;
    emailSent();
    return false;
  }
};

function emailSent() {
  document.querySelector(".news-box").style.display = "none";
  document.querySelector(".done-box").style.display = "block";
}
