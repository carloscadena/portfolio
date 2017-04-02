'use strict';

(function(module) {
  const portfolioController = {};

  portfolioController.index = () => {
    $('#projects').show();
    repos.requestRepos(repoView.index);
  };

  module.portfolioController = portfolioController;
})(window);
