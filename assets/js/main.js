function onSignIn() {
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: '85833623378-nvjnrb68dtph5qka8s27m3ob2kumnlas.apps.googleusercontent.com',
    }).then(function(auth2) {
      auth2.signIn().then(function(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('Name: ' + profile.getName());
        console.log('Email: ' + profile.getEmail());
        console.log('Image URL: ' + profile.getImageUrl());
        // TODO: Do something with the user data, like send it to a server or update the UI.
      }, function(error) {
        console.log('Sign-in error', error);
      });
    });
  });
}
