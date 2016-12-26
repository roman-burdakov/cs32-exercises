define(['Playlist', 'Song'], function(Playlist, Song){

  var playlist;
  // Mocking sessionStorage
  // beforeEach happens before each it() executes
  beforeEach(function () {
    var store = {};
    spyOn(sessionStorage, 'getItem').and.callFake(function (key) {
      // by default sessionStorage will return a string of an empty array, not undefined
      return store[key] || '[]';
    });
    spyOn(sessionStorage, 'setItem').and.callFake(function (key, value) {
      // concatenating to an empty string will store it as a string
      return store[key] = value + '';
    });
    spyOn(sessionStorage, 'clear').and.callFake(function () {
        store = {};
    });

    // reset playlist
    playlist = new Playlist();

  });

  describe('Playlist', function(){
    it('should initialize to empty', function(){
      expect(playlist.playlist.length).toBe(0);
    });
    describe('addSong', function(){
      it('should add a song to the playlist', function(){
        playlist.addSong('myTitle');
        expect(playlist.playlist[0].title).toBe('myTitle');
      });
    });
    describe('removeSong', function(){
      it('should remove a song from the playlist', function(){
        playlist.addSong('mySong');
        expect(playlist.playlist.length).toBe(1);
        playlist.removeSong(0);
        expect(playlist.playlist.length).toBe(0);
      });
    });
    describe('updatePlaylist', function(){
      it('should set the sessionStorage for the object', function(){
        expect(sessionStorage.getItem('playlist')).toBe('[]');
        playlist.playlist.push(new Song('something new'));
        playlist.updatePlaylist();
        expect(sessionStorage.getItem('playlist')).toBe(JSON.stringify(playlist.playlist));
      });
    });
  });


});
