const input = document.querySelector("input[name=email]");
const error = document.querySelector(".error");
const submitBtn = document.querySelector(".send");
const dismiss = document.querySelector(".dismiss");
const main = document.querySelector(".container");
const form = document.querySelector("form");
const user = document.querySelector(".user");
const message = document.querySelector(".message-box");

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
    main.classList.add("hidden");
    message.classList.remove("hidden");
    user.innerHTML = input.value;
    user.style.fontWeight = "600";
    input.value = "";
  }
});

dismiss.addEventListener("click", () => {
  main.classList.remove("hidden"); 
  message.classList.add("hidden"); 
});

input.addEventListener("input", resetError);
