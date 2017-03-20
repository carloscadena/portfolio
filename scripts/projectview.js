'use strict';

$('#projects').hide();
$('#contacts').hide();

$('.main-nav').on('click', 'li', function(event){
  event.preventDefault();
  $('section').hide();
  var idClicked = $(this).find('a').attr('href');
  console.log(idClicked);
  $(idClicked).fadeIn();
});
