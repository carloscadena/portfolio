'use strict';

(function(module){
  const portfolioController = {};

  portfolioController.init = function(){
    $('#about').hide();
    $('#contacts').hide();
    $('#projects').show();
  }
  module.portfolioController = portfolioController;
})(window);
