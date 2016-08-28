juke.factory('AlbumFactory', function($http) {
  var album = {};
  var audio = document.createElement('audio');

  album.fetchById = function(id) {
    return $http.get('/api/albums/' + id)
    .then(function(response) {
      var album = response.data;
      album.imageUrl = '/api/albums/' + album.id + '/image';
      return album;
    })
  }

  audio.start = function() {
    audio.src = 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3';
    audio.play();
    audio.load();
  }

  return album;
})
