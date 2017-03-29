'use strict';
(function(module){
$('#projects').hide();
$('#contacts').hide();

$('.main-nav').on('click', 'li', function(event){
  event.preventDefault();
  $('section').hide();
  var idClicked = $(this).find('a').attr('href');
  $(idClicked).fadeIn('slow');
});
})(window)
