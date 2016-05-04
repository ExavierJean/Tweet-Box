var data = {
  name: "Fly Guys",
  handle: "@ThatFlyGuy",
  time: Date.now(),
  picture: "http://img.speakaboos.com/content/story_screenshots/hi-fly-guy-2015-08-03-120304.jpg",
};

var post = function(){
  $('.b-box').css('width', '759px')
  $('#button2').removeClass('hidden')

  data.text = $('#new-tweet').val()

  var tweet = "<div class='tweet-box'><img class='profile-image' src=" + data.picture + "><div class='tweet-container'><p class='profile-name'>" + data.name + "</p><p class='profile-handle'>" + data.handle + "</p><p class='date-time'>" + data.time + "<p class='text-box'>" + data.text + "</p></div>"

  $('#feed').prepend(tweet)

  $('#new-tweet').val("")

}

$(document).on("keypress", "#new-tweet", function(e) {
     if (e.which == 13) {
         post()
     }
});

$('#button1').click(function() {
  post()
});

$('#button2').click(function() {

  $('#feed').children().last().remove()

  if ($('#feed').children().length == 0) {
    $('.b-box').css('width', '534px')
    $('#button2').addClass('hidden')
  }

});

$.ajax({
  url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?wizkhalifa?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
  dataType: 'jsonp',
  count: 5,
})