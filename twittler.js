$(document).ready(function(){
  $(".btn").on('click', function(){
    var $section = $('section');
    $section.html('');

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      //create class for user
      var user = tweet.user;
      var $user = $('<div class="user"></div>');
      $user.text('@' + user + ':');
      $tweet.text(" " + tweet.message + " (" + tweet.created_at + ")");
      $user.prependTo($tweet);
      $tweet.appendTo($section);
      index -= 1;
    }
  });


  //Allow the user to click on a username to see that user's timeline 
  $(".user").on('click', function(){    
    var $section = $('section');
    $section.html('');

    //remove all tweets appended to section
    $('div.tweet').remove();

    //defines username
    var user = $(this).text();
    user = user.slice(1, -1);

    //iterate through user's tweets
    var index = streams.users.user.length - 1;
    while(index >= 0){
      var tweet = streams.users.user[index];
      var $tweet = $('<div class="tweet"></div>');
      //format tweet
      $tweet.text("@" + user +": " + tweet.message + " (" + tweet.created_at + ")");
      //append tweet to section
      $tweet.appendTo($section);
      index -= 1;
    }
  });
  
});