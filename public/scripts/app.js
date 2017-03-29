'use strict';

const allProjects = [];

function Portfolio (work) {
  this.title = work.title;
  this.url= work.url;
  this.description = work.description;
  this.publishedOn = work.publishedOn;
}

Portfolio.prototype.toHtml = function() {
  let template = Handlebars.compile($('#project-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago';

  return template(this);
};

Portfolio.loadAll = function(rawData){
  allProjects = rawData.map(function(ele) {
    return new Portfolio(ele);
  });

  allProjects.forEach(function(a){
    $('#projects').append(a.toHtml());
  });
}

Portfolio.fetchAll = function(){
  if(localStorage.rawData){
    Portfolio.loadAll(JSON.parse(localStorage.rawData));
  } else {
    $.getJSON('data/rawdata.json', function(data){
      localStorage.rawData = JSON.stringify(data);
      Portfolio.loadAll(data);
    });
  }

}
