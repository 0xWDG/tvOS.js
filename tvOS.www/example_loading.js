if (App === 'undefined') var App = {} // Eslint error.
if (tvOS === 'undefined') var tvOS = {} // Eslint error.
if (evaluateScripts === 'undefined') var evaluateScripts = {} // Eslint error.

evaluateScripts(['https://wdg.github.io/tvOS.js/tvOS.js'], function (success) {
  if (success) {
    //
    // Show loading indicator with default text ('Loading')...
    tvOS.showLoadingIndicator()
    //
    // Timer!
    setTimeout(function () {
      // Remove Loading indicator...
      tvOS.removeLoadingIndicator()
      // Display Loading screen with text Reloading
      tvOS.showLoadingIndicator('Please Wait')
      // Reload timer ;)
      setTimeout(function () {
        //
        // Finally. Reload
        tvOS.location('https://wdg.github.io/tvOS.js/index.js')
      }, 5000)
    }, 500)
  } else {
    console.log('Missing it all!')
  }
})
