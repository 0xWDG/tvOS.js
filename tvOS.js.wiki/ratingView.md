# `tvOS.ratingView(...)`
### Example (gif)


![compilationView](https://rawgit.com/wdg/tvOS.js/tvOS.wiki-data/ratingView.gif)

### Example code:

    /**
     * PLEASE NOTE THAT CALLBACK WILL NOT WORK.
     */
    evaluateScripts(['https://wdg.github.io/tvOS.js/tvOS.js'], function (success) {
      if (success) {
       tvOS.RatingView('TV Demo Rating', '0.5', function (event) {
        console.log(event)
       })
     } else {
      console.log('Missing it all!')
     }
    })

### Discussion

Go to: [issues/6](https://github.com/wdg/tvOS.js/issues/6)

