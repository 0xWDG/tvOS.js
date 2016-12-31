# `tvOS.alert(...)`
### Example (gif)


![listView](https://rawgit.com/wesdegroot/tvOS.js/tvOS.wiki-data/alertView.gif)

### Example code:
*please note, the loading screen is removed in this example*

    evaluateScripts(['https://wesdegroot.github.io/tvOS.js/tvOS.js'], function (success) {
      if (success) {
        //
        // Display a cool alert :)
        tvOS.alert('Hi 😀', 'i\m a:', ['apple', 'tv', 'app', '😎'], function (event) {
          //
          // Display another 'weird' Alert
          tvOS.alert('Hi 😀', 'Event=' + event + '\ncan i reload?', ['Reload'], function () {
              tvOS.reload()
          })
        })
      } else {
        console.log('Missing it all!')
      }
    })

### Discussion

Go to: [issues/2](https://github.com/wesdegroot/tvOS.js/issues/2)

