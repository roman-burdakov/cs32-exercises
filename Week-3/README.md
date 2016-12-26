# Week 3: Jasmine
*In Class*

## Jasmine, From Scratch
*we'll do this part together*

1. Start with an empty directory
2. [Download Jasmine](https://github.com/jasmine/jasmine/releases) (the standalone zip)
3. Unzip it
4. Run SpecRunner.html in your browser
5. Look at SpecRunner
6. Look at the SpecHelper
7. Look at the PlayerSpec

## Jasmine with RequireJS
*we'll do this part together too!*

1. Clone this repository, it is a solution for last week's
2. I've already done the Jasmine and RequireJS integration
3. Look at the SpecRunner, compare it to the one from part 1
4. Run through the tests-main.js config, compare it to the app's RequireJS config

## Mock sessionStorage
*I'll do this part*

1. Create a beforeEach block above the first describe
2. Create a var called store and initialize it with an empty object
3. [spyOn](http://jasmine.github.io/2.0/introduction.html#section-Spies) sessionStorage's getItem
4. [Call a fake function on the spy](http://jasmine.github.io/2.0/introduction.html#section-Spies:_<code>and.callFake</code>)
5. Make the fake function take one parameter (the key to the store) and return the value for that key
6. Repeat for sessionStorage's setItem
7. Remember that sessionStorate (and localStorage) are objects where the values are all string representations of the data stored in them

## Make some Specs for Playlist
*this is for you to do*

1. When you initialize Playlist and sessionStorage is empty, it should start empty
2. When you initialize Playlist and sessionStorage is not empty...
3. When you add a song, a song is added to the array object
4. When you add a song, updatePlaylist is called (*use `spyOn` within the `it` and `.toHaveBeenCalled`*)
5. When you remove a song, the song is removed from the array object
6. When you remove a song, updatePlaylist is called
7. When you update the playlist, the sessionStorage object matches the playlist's array

## Refactor PlaylistView
*start this off together*

1. Create a `this.config` object that gets it's value passed in from the constructor or gets initialized with an empty object
2. There are 3 jQuery DOM objects used in this view, find them and set them to class variables -- for example `this.$song = $('#song')`
3. If these variables are defined in the config, set them as that instead -- something like: `config.song || $('#song');`
4. Make sure all instances of those jQuery objects are switched out with the new class variables
5. In PlaylistViewSpec, when you initialize the PlaylistView, give it an object with those 3 variables defined as their base jQuery elements: `$('<form></form>')`, `$('<input/>')`, etc...

## PlaylistViewSpec Tests
*on your own*

1. When you submit a form:
  1. wipe the text from the text field
  2. create an `<li>` in the current playlist
  3. create an `<li>` with the text from the input
2. When you delete a song:
  1. remove the song from the current playlist
