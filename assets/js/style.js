$(document).ready(function () {
    $('#first-button').click(function () {
        let user = $('#username').val();
        if (user==''){
            $('#show_error').html('**The username should not be empty');
            $('#show_error').css('color','yellow');
            return false;
        }
        if ((user.length < 3) || (user.length > 25)) {
            $('#show_error').html('**Username must have more than 3 and less than 25 letters');
            $('#show_error').css('color','yellow');
            $('#show_error').css('background','rgba(30, 30, 30, 0.7)');
            return false;
        }
        
      })
  })