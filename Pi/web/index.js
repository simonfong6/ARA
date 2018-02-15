function servo(joint, degrees){
  console.log(joint,degrees);
  var joint_id = '#' + joint;
  $(joint_id).text(degrees);
  var servo_url = "http://localhost:5000/servo/";
  var servo_command = servo_url + joint +'/' + degrees;
  $.get(servo_command, function(data){
    console.log(data);
  });
  
}

function servo_plus(joint){
  var joint_id = '#' + joint;
  var cur_deg = parseInt($(joint_id).text());
  servo(joint,cur_deg + 1);
}

function servo_minus(joint){
  var joint_id = '#' + joint;
  var cur_deg = parseInt($(joint_id).text());
  servo(joint,cur_deg - 1);
}

function get_image(){
    $.get(image_url, function(data){
        $("#img_1").attr("src",data);
        console.log("Retrieved Image");
    });
}
