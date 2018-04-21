const formElement = document.getElementById("myForm");
formElement.addEventListener("submit", e => {
  const first = document.getElementById("password1");
  const second = document.getElementById("password2");
  console.log(first, second);
  let msg = "";
  if (first.value.length < 6 || first.value !== second.value) {
    msg = "Error: password must be atleast 6 characters long."
  }
  document.getElementById("passwordHelp").textContent = msg;
  e.preventDefault();
});
const regex = /^[0-9]*$/gm;
document.getElementById("password1").addEventListener("", e => {
  if (!(regex.test(e.target.value))) var msg = "include a number"
  document.getElementById("passwordHelp").textContent = msg;
});