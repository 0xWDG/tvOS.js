if (App === 'undefined') var App = {} // Eslint error.
if (tvOS === 'undefined') var tvOS = {} // Eslint error.
if (evaluateScripts === 'undefined') var evaluateScripts = {} // Eslint error.

evaluateScripts(['http://localhost:9001/tvOS.js'], function (success) {
  if (success) {
    tvOS.loadYouTubeVideo('JfG__VEF2yg', function (video) {
      var player = new Player()
      var playlist = new Playlist()
      var mediaItem = new MediaItem('video', video)
      player.playlist = playlist
      player.playlist.push(mediaItem)
      player.present()
    })
  } else {
    console.log('Missing it all!')
  }
})
