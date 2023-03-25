var loginButton = document.getElementById("loginBtn");
  var loginPage = document.getElementById("above-loginBtn");

  loginButton.addEventListener("click", function() {
    if (loginButton.innerHTML === "ล็อกอิน") {
      loginButton.innerHTML = "จัดการ";
      loginPage.innerHTML = "Logout";
    } else {
      window.location.href = "choose.html";
    }
  });