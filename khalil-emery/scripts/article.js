'use strict';

let articles = [];

// COMMENT: What is the purpose of the following function? Why is its name capitalized? Explain the context of "this" within the function. What does "rawDataObj" represent?
// rawDataObj is a constructor function,thats why its name is capitalized, "this" property gives the object a value and returns a refernce to the constructor. rawDataObj represents raw data of the object constructor

function Article (rawDataObj) {
  // TODO: Use the JS object that is passed in to complete this constructor function:
  // Save ALL the properties of `rawDataObj` into `this`
  console.log(articles[0]);
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;

}

Article.prototype.toHtml = function() {
  // COMMENT: What is the benefit of cloning the article? (see the jQuery docs)
  // PUT YOUR RESPONSE HERE

  let $newArticle = $('article.template').clone();
  /* TODO: This cloned article still has a class of template. In our modules.css stylesheet, we should give all elements with a class of template a display of none so that our template does not display in the browser. But, we also need to make sure we're not accidentally hiding our cloned article. */
  $newArticle.removeClass('template');

  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.attr('data-category', this.category);

  /* TODO: Now use jQuery traversal and setter methods to fill in the rest of the current template clone with values of the properties of this particular Article instance.
    We need to fill in:
      1. author name,
      
      2. author url,
      3. article title,
      4. article body, and
      5. publication date. */
  $newArticle.find('address a').html(this.author);
  $newArticle.find('address a').attr('href', this.authorUrl);
  $newArticle.find('h1').html(this.title);
  $newArticle.find('section').html(this.body);
  // $newArticle.find('time').attr('datetime', this.publishedOn);
  $newArticle.find('article').attr('data-category', this.category);

  // REVIEW: Display the date as a relative number of 'days ago'
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.sort(function(a,b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it. Look at the docs and think about how the dates would be sorted if the callback were not included in this method.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn)); //returns sorted publishedOn value from lowest to highest with lowest being first
});

// TODO: Refactor these for loops using the .forEach() array method.

// for(let i = 0; i < rawData.length; i++) {
//   articles.push(new Article(rawData[i])); //create new instance of Article for each element in the articles array
// }

rawData.forEach(function(val){
  articles.push(new Article(val));
});

// for(let i = 0; i < articles.length; i++) { //iterate over articles array
//   $('#articles').append(articles[i].toHtml()); //target articles ID and append each position array to HTML
// }

articles.forEach(function(val, i){
  $('#articles').append(articles[val, i].toHtml());
});
