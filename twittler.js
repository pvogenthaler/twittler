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

    $(".user").on('click', function() {
      //remove all tweets appended to section
      $('div.tweet').remove();

      //get username
      var user = $(this).text();
      user = user.slice(1, -1);

      //iterate through user's tweets
      console.log(streams.users);
      var index = streams.users[user].length - 1;
      while(index >= 0){
        var tweet = streams.users[user][index];
        var $tweet = $('<div class="tweet"></div>');
        //format tweet
        $tweet.text("@" + user +": " + tweet.message + " (" + tweet.created_at + ")");
        //append tweet to section
        $tweet.appendTo($section);
        index -= 1;
      }
    });
  });
  
});