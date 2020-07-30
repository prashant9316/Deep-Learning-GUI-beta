

function print_data(data){
  document.getElementById("name").innerHTML = data.Title;
  document.getElementById("desc").innerHTML = "DESC not available";
  document.getElementById("date").innerHTML = "Not available";
  document.getElementById("profile_link").innerHTML = data.link[i];
  document.getElementById("model_link").innerHTML = "not available";
}

//Fucntion not working as of yet
function get_user_data(){
  var json = (function() {
    var json = null;
    $.ajax({
      'async': false,
      'global': false,
      'url': "user.json",
      'dataType': "json",
      'success': function(data) {
        json = data;
      }
    });
    return json;
  })();
}

function init(){
  data = get_user_data();
  console.log("Data retreived:");
  console.log(data);
}

init();