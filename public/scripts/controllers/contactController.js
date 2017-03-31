'use strict';

(function(module){
  const contactController = {};

  contactController.init = function(){
    $('#about').hide();
    $('#projects').hide();
    $('#contacts').show();
  }
  module.contactController = contactController;
})(window)
