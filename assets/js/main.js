function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $("#name").text(profile.getName());
  $("#email").text(profile.getEmail());
  $("#img").attr('src', profile.getImageUrl());
  $(".data").css("display", "block");
  $('.start-button').show();
  $('.g-signin2').hide();
  console.log("ได้แล้ว")
}


  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: '85833623378-nvjnrb68dtph5qka8s27m3ob2kumnlas.apps.googleusercontent.com'
    });
  });
  

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("You've been signOut sucessfully");
      $(".g-signin2").css("display","block");
      $(".data").css("display","none");
    });
  }