var searchYouTube = (options, callback) => {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'key': options.key,
      'part': 'snippet',
      'q': options.query,
      'maxResults': options.max,
      'videoEmbeddable': 'true',
      'type': 'video'
    },
    dataType: 'json',
    success: function (data) {
      callback(data.items);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error

      console.error('fail', data);
    }
  });
};
window.searchYouTube = searchYouTube;



// ('GET',
// '/youtube/v3/search',
// {'maxResults': '25',
//  'part': 'snippet',
//  'q': 'surfing',
//  'type': ''});
// };
