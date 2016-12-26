# Week 2: Modularization (with AMD)
*In Class*

## RequireJS

1. Clone and pull down this repo
2. Download [RequireJS](http://requirejs.org/docs/download.html) and add it to the project, place it in the vendors dir
3. Set the entry point for the application to main.js
4. Add a requirejs.config method
5. Set the baseUrl to the js dir
6. Create a path for "jquery" to "vendors/jquery.min"
7. Do the same for Bootstrap

## Refactor Playlist 
1. Wrap the Playlist in a define method that depends on jquery
2. Wrap the main.js code that initializes a Playlist in a `require()`
3. Make sure to inject the Playlist into that require block
4. Check to see if it works
5. Remember to remove all of the `<script>` tags on the original index.html, in their place should be the single `<script>` for require

## Separate Out DOM vs Business Logic
1. DOM functions go in PlaylistView.js
2. Business logic functions will stay in Playlist.js
3. Include the Playlist module in the PlaylistView module
4. Use PlaylistView in main.js to initialize, just as before

*For this exercise, "business logic" functions are anything that doesn't touch the DOM. So Playlist.js should not include jquery.*

## Bonus: Create a Song.js module
1. Create the module, just give it a title
2. Refactor the Playlist to use that Song module

*The playlist session storage should be storing an object for the song like `{title: "Highway to Hell"}`*
