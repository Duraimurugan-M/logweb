var passKey = document.getElementById("passKey");
var checkBox = document.getElementById("checkbox");
var checkBoxContent = document.getElementById("checkboxContent")

function passClick() {
if (checkBox.checked) {
passKey.type = "text";
checkBoxContent.textContent = "Hide Password";
} else {
passKey.type = "password";
checkBoxContent.textContent = "Show Password";
}
}
