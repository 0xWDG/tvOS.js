# YouTube (Beta)

### Example:
    evaluateScripts(['https://wdg.github.io/tvOS.js/tvOS.js'], function (success) {
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
        console.log('Missing required files!')
      }
    })

### Discussion & Issues:
Please see: [This](https://github.com/wdg/tvOS.js/issues/8) (Open issues: **1**)
