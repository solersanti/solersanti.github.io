$(document).ready(function() {


// Add jQuery here


$('.nav_radio').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.ad').removeClass('hide');
  $('.item.ad').addClass('show');

  $('.nav_clear').removeClass('hide');
});


$('.nav_instruments').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');


  $('.item.pipe').removeClass('hide')
  $('.item.pipe').addClass('show');

  $('.nav_clear').removeClass('show');
});

$('.nav_plan').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');


  $('.item.plan').removeClass('hide')
  $('.item.plan').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_plan').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');


  $('.item.plan').removeClass('hide')
  $('.item.plan').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_clear').click(function(event) {
  $('.nav_clear').addClass('hide');
  $('.nav_clear').removeClass('show');


  $('.item').removeClass('hide');
});

  $('.nav_thumbnail').click(function(event){
    $('.item').addClass('thumbnail');

  });

$('.nav_large').click(function(event){
  $('.item').removeClass('thumbnail');

});

















  });
