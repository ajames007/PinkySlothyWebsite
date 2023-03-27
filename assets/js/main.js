 // Wait for the page to load
 window.addEventListener('load', function() {
    
  // Get the elements
  const gIdSignin = document.querySelector('.g_id_signin');
  const startButton = document.querySelector('.start-button');

  // Listen for a click event on the gIdSignin element
  gIdSignin.addEventListener('click', function() {
    // Hide the gIdSignin element
    gIdSignin.style.display = 'none';
    // Show the startButton element
    startButton.style.display = 'block';
  });

  startButton.addEventListener('click', function() {
    // Redirect the user to the choose.html page
    window.location.href = 'result.html';
  });
});


// Load the Google Sign-In API
gapi.load('auth2', function() {
  // Initialize the Google Sign-In API
  gapi.auth2.init({
    client_id: '85833623378-nvjnrb68dtph5qka8s27m3ob2kumnlas.apps.googleusercontent.com',
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


