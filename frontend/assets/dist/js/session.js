$( document ).ready(function() {
  // var userFullName;
  // var userId;
  
checkSession();
  
function checkSession() {
  var promise = get('../../backend/session/sessionController.php');
  promise.then(function (data) {
    var ret = data;
    if(ret.code == 200) {
		if (ret.isOk) {
			// Sessison is active
			var user = JSON.parse(ret.data);
			setUserSessionFields(user.userFullName, user.userId, user.role);
		} else {
			// NO Sessison is active
          alert(ret.msg);
          window.location.href = "login.html";      
      }
    } 
  });
}

function setUserSessionFields(fullName, userId, role) {
	$("#userFullName").text(fullName);
	//$("#userId").text(userId);
	//$("#userRole").text(role);
}
});