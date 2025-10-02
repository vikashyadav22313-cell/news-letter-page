const input = document.querySelector("input[name=email]");
const holder = document.querySelector("input[placeholder]");
const error = document.querySelector(".error");
const submitBtn = document.querySelector(".send");
const form = document.querySelector("form");  
const message= document.querySelector(".message");  
function resetError() {
  input.style.backgroundColor = "white";
  input.style.border = "1px solid hsl(234, 29%, 20%)";
  error.classList.add("hidden");
}

function showError() {
  input.style.border = "1px solid hsl(4, 100%, 67%)";
  input.style.backgroundColor = "#FFE8E7";
  error.classList.remove("hidden");
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = input.value.trim();

  if (email === "" || !email.includes("@")) {
    showError();
  } else {
    resetError();
    form.submit();
  }
});

input.addEventListener("input", resetError);
