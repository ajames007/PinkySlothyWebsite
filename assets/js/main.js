function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile().then((Response)=>{
    console.log(Response);
  }) ;

  console.log("ได้แล้ว")
}

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("You've been signOut sucessfully");
      $(".g-signin2").css("display","block");
      $(".data").css("display","none");
    });
  }