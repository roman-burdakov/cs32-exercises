define(['jquery', 'PlaylistView', 'Song'], function($, PlaylistView, Song){

  var playlistView;
  // beforeEach happens before each it() executes
  beforeEach(function () {
    playlistView = new PlaylistView({
      addSongForm: $('<form></form>'),
      song: $('<input />'),
      currentPlaylist: $('<ul></ul>')
    });
    console.log(playlistView.$addSongForm);
  });

  describe('PlaylistView', function(){
    describe('submitting the form', function(){
      it('should call Playlist.addSong', function(){
        // because I want to know if it's called, not actually call it
        spyOn(playlistView.playlist, "addSong");
        playlistView.$addSongForm.submit();
        expect(playlistView.playlist.addSong).toHaveBeenCalled();
      });
      it('should wipe the text from the text field', function(){
        playlistView.$song.val("something");
        playlistView.$addSongForm.submit();
        expect(playlistView.$song.val()).toBe('');
      });
      it('should create an li in the currentPlaylist', function(){
        playlistView.$song.val("something");
        playlistView.$addSongForm.submit();
        expect(playlistView.$currentPlaylist.children()[0].localName).toBe('li');
      });
      it('should create an li with the text of the input', function(){
        var name = "asdf";
        playlistView.$song.val(name);
        playlistView.$addSongForm.submit();
        expect(playlistView.$currentPlaylist.first().html()).toContain(name);
      });
      it('should create an li with a delete button', function(){
        playlistView.$song.val("something");
        playlistView.$addSongForm.submit();
        expect(playlistView.$currentPlaylist.first().find('button').selector).toBe("button");
        expect(playlistView.$currentPlaylist.first().find('button').html()).toBe("remove");
      });
    });
    describe('deleting the song', function(){
      it("should remove the song from the current playlist", function(){
        playlistView.$song.val("asdf");
        playlistView.$addSongForm.submit();
        expect(playlistView.$currentPlaylist.children().length).toBe(1);
        playlistView.$currentPlaylist.first().find('button').click();
        expect(playlistView.$currentPlaylist.children().length).toBe(0);
      });
      it("should call Playlist.removeSong", function(){
        spyOn(playlistView.playlist, "removeSong");
        playlistView.$song.val("asdf");
        playlistView.$addSongForm.submit();
        playlistView.$currentPlaylist.first().find('button').click();
        expect(playlistView.playlist.removeSong).toHaveBeenCalled();
      });
    });

  });


});
