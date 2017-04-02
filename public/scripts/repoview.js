'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {

    $('#projects').find('ul').empty();
    $('#projects').show()
    $('#about').hide();
    $('#contacts').hide();
  };

  let render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();
    $('#projects ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
