// Get the sign-in button and the start button elements
const signInBtn = document.getElementById("g_id_signin");
const startBtn = document.getElementById("start-button");

// Check if the user is logged in
if (GoogleAuth.isSignedIn.get()) {
  // Hide the sign-in button and show the start button
  signInBtn.style.display = "none";
  startBtn.style.display = "block";
} else {
  // Show the sign-in button and hide the start button
  signInBtn.style.display = "block";
  startBtn.style.display = "none";
}
