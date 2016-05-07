var $form = jQuery('#email-form');
$form.on('submit', function(event){
  event.preventDefault();
  var $email = $form.find('input[name=email]');
});
