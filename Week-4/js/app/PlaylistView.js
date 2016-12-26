define(['jquery', 'Playlist'], function($, Playlist){

  var PlaylistView = function(config){
    // since we're doing work with the DOM,
    //   we want to abstract out those pieces to make it testable
    // we can do this with a config
    this.config = config || {};
    this.$addSongForm = this.config.addSongForm || $('#addSongForm');
    this.$song = this.config.song || $('#song');
    this.$currentPlaylist = this.config.currentPlaylist || $('#currentPlaylist');

    // initialize
    this.playlist = new Playlist();
    this.addSong = $.proxy(this.addSong, this);
    this.listenAddSong();
    this.updatePlaylist();

  };
  PlaylistView.prototype.listenAddSong = function(){
    this.$addSongForm.on('submit', this.addSong);
  };
  PlaylistView.prototype.addSong = function(event){
    this.playlist.addSong(this.$song.val());
    this.updatePlaylist();
    this.$song.val('');
    return false;
  };

  PlaylistView.prototype.updatePlaylist = function() {
    this.playlist.updatePlaylist();
    this.updatePlaylistDom();
  };
  PlaylistView.prototype.updatePlaylistDom = function(){
    var playlistDom = this.playlist.playlist.map($.proxy(this.createPlaylistDomMap, this));

    this.$currentPlaylist.html(playlistDom);
  };

  PlaylistView.prototype.createPlaylistDomMap = function(song, index){
    var that = this;
    var removeButton = document.createElement("button");
    removeButton.appendChild(document.createTextNode("remove"));
    $(removeButton).click(function(){
      that.playlist.removeSong(index);
      that.updatePlaylistDom();
    });
    $(removeButton).addClass("btn");

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(song.title));
    li.appendChild(removeButton);
    return li;
  };

  return PlaylistView;
});
