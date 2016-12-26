define(['Playlist'], function(Playlist){
  var playlist;
  describe('Playlist', function(){
    var songName = 'testing could be fun';
    beforeEach(function(){
      var store = {};
      spyOn(sessionStorage, "getItem").and.callFake(function(key){
        return store[key] || '[]';
      });
      spyOn(sessionStorage, "setItem").and.callFake(function(key, value){
        store[key] = '' + value;
      });
      spyOn(sessionStorage, "clear").and.callFake(function(){
        store = {};
      });

      sessionStorage.clear();
      playlist = new Playlist();
    });

    describe('When you initialize Playlist and...', function() {
      it('sessionStorage is empty, it should start empty', function(){
          expect(playlist.playlist).toEqual([]);
      });

      it('sessionStorage is not empty', function(){
          playlist.addSong(songName);
          expect(playlist.playlist.length).toBe(1);
      });
    });

    describe('When you add a song...', function(){
      it('it should be registered', function(){
        expect(playlist.playlist.length).toBe(0);
        playlist.addSong(songName);
        expect(playlist.playlist.length).toBe(1);
        expect(playlist.playlist[0].title).toEqual(songName);
      });

      it('should have been call updatePlaylist', function(){
        spyOn(playlist, 'updatePlaylist');
        playlist.addSong(songName);
        expect(playlist.updatePlaylist).toHaveBeenCalled();
      });
    });

    describe('When you remove a song...', function(){
      it('it should be removed from sessionStorage', function(){
        expect(playlist.playlist.length).toBe(0);
        playlist.addSong(songName);
        expect(playlist.playlist.length).toBe(1);
        playlist.removeSong(0);
        expect(playlist.playlist.length).toBe(0);
      });

      it('updatePlaylist should be called', function(){
        expect(playlist.playlist.length).toBe(0);
        playlist.addSong(songName);
        expect(playlist.playlist.length).toBe(1);
        spyOn(playlist, 'updatePlaylist');
        playlist.removeSong(0);
        expect(playlist.updatePlaylist).toHaveBeenCalled();
      });
    });

    it('when you update playlist, sessionStorage matches playlist array', 
      function(){
        expect(playlist.playlist.length).toBe(0);
        playlist.addSong(songName);
        expect(playlist.playlist.length).toBe(1);
    });

  });

});