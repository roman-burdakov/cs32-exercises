define(['PlaylistView'], function(PlaylistView){
  describe('PlaylistView', function() {
    it('when you initialize the PlaylistView', function(){
      var view = new PlaylistView({
        song: '#song', 
        currentPlaylist: '#currentPlaylist',
        addSongForm: '#addSongForm'});
      expect("true", true).toBe(true);
    });

  });
});