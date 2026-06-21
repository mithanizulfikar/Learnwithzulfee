function login() {
  const username = document.getElementById('loginUser').value;
  const password = document.getElementById('loginPass').value;
  if (username === "admin" && password === "1234") {
    document.getElementById('loginContainer').classList.add('hidden');
    document.getElementById('formContainer').classList.remove('hidden');
  } else {
    alert("Invalid login");
  }
}

document.getElementById("regForm").addEventListener("submit", function(e){
  e.preventDefault();

  const formData = new FormData(this);
  const data = {};
  formData.forEach((val, key) => data[key] = val);

  fetch("https://mithanizulfikar.github.io/Learnwithzulfee/", {
    method: "POST",
    body: JSON.stringify(data)
  }).then(res => {
    alert("Registration Successful. Confirmation email sent.");
    document.getElementById("regForm").reset();
  }).catch(() => {
    alert("Error submitting form");
  });
});
