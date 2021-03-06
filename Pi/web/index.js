// Servo control
function servo(joint, degrees){
  console.log(joint,degrees);
  var joint_id = '#' + joint;
  $(joint_id).text(degrees);
  var servo_url = "/servo/";
  var servo_command = servo_url + joint +'/' + degrees;
  $.get(servo_command, function(data){
    console.log(data);
  });
  get_image();
  
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

// Camera control
function get_image(){
    var image_url = "image"
    $.get(image_url, function(data){
        $("#img_1").attr("src",data);
        console.log("Retrieved Image");
    });
}

//Motor control
function motor(direction){
    var motor_url = "motor/"
    var motor_cmd = motor_url + direction;
    $.get(motor_cmd, function(data){
        console.log(data);
    });
}
