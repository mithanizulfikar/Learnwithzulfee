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
  fetch("https://mithanizulfikar.github.io/Learnwithzulfee/", {
  method: "POST",
  headers: {
    "Content-Type": "text/plain"
  },
  body: JSON.stringify(data)
})
.then(res => res.text())
.then(res => {
  alert("Registration Successful. Email sent!");
  document.getElementById("regForm").reset();
})
.catch(err => {
  console.log(err);
  alert("Error submitting form");
});
});
