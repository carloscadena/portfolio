'use strict';

var allProjects = [];

function Portfolio (work) {
  this.title = work.title;
  this.url= work.url;
  this.description = work.description;
  this.publishedOn = work.publishedOn;
}

Portfolio.prototype.toHtml = function() {
  var $newProject = $('article.template').clone().removeClass('template');

  $newProject.find('header a').attr('href', this.url);
  $newProject.find('header a').text(this.title);
  $newProject.find('.about-project').html(this.description);
  $newProject.find('time').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  return $newProject;
};

rawData.forEach(function(ele) {
  allProjects.push(new Portfolio(ele));
});

allProjects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
