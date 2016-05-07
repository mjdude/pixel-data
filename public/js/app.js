var $form = jQuery('#email-form');
$form.on('submit', function(event){
  event.preventDefault();
  var $email = $form.find('input[name=email]');
//  var $email = 'mo@syncspot.net';
  console.log($email.val());
  var imgHTML = '<img src="http://localhost:3000/pixel?orderID=12345&orderVal=99.95&email=' + $email.val() + '">';
  console.log(imgHTML);
  $("#pixel-data").html(imgHTML);
});
