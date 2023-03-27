// Get the sign-in button and the start button elements
const signInBtn = document.getElementById("g_id_signin");
const startBtn = document.getElementById("start-button");
// Load the Google Sign-In API
gapi.load('auth2', function() {
  // Initialize the Google Sign-In API
  gapi.auth2.init({
    client_id: 'YOUR_CLIENT_ID',
    // Other optional parameters
  }).then(function() {
    // Obtain a reference to the GoogleAuth object
    GoogleAuth = gapi.auth2.getAuthInstance();
    
    // Check if the user is signed in
    if (GoogleAuth.isSignedIn.get()) {
      // The user is signed in, do something here
      var user = GoogleAuth.currentUser.get();
      var profile = user.getBasicProfile();
      console.log('User email:', profile.getEmail());
    } else {
      // The user is not signed in, do something else here
      console.log('User is not signed in');
    }
    
    // Sign the user in programmatically
    GoogleAuth.signIn().then(function() {
      console.log('User signed in successfully');
    }, function(error) {
      console.error('Error signing in:', error);
    });
    
    // Sign the user out programmatically
    GoogleAuth.signOut().then(function() {
      console.log('User signed out successfully');
    }, function(error) {
      console.error('Error signing out:', error);
    });
  });
});


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
