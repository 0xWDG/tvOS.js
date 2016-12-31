## `tvOS.showLoadingIndicator(...)`
## `tvOS.removeLoadingIndicator()`

<br>
### Example (gif)


![listView](https://rawgit.com/wdg/tvOS.js/tvOS.wiki-data/alertView.gif)

### Example code:

    evaluateScripts(['https://wdg.github.io/tvOS.js/tvOS.js'], function (success) {
      if (success) {
        //
        // Show loading indicator with custom text ('Booting')...
        tvOS.showLoadingIndicator('Booting')
        //
        // Timer!
        setTimeout(function () {
          // Remove Loading indicator...
          tvOS.removeLoadingIndicator()
        }, 3000)
      } else {
        console.log('Missing it all!')
      }
    })
    
### Discussion

Go to: [issues/3](https://github.com/wdg/tvOS.js/issues/3)

