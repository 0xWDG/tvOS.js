if (App === 'undefined') var App = {} // Eslint error.
if (tvOS === 'undefined') var tvOS = {} // Eslint error.
if (evaluateScripts === 'undefined') var evaluateScripts = {} // Eslint error.

/**
 * PLEASE NOTE THAT CALLBACK WILL NOT WORK.
 */
evaluateScripts(['http://localhost:9001/tvOS.js'], function (success) {
  if (success) {
    tvOS.RatingView('TV Demo Rating', '0.5', function (event) {
      console.log(event)

      tvOS.alert('Vote', tvOS.toStar(event) + ' (' + tvOS.toHuman(event) + ')', ['Ok', 'Cancel'], function (e) {
        if (e === 'Ok') {
          tvOS.location('http://localhost:9001/index.js')
        } else {
          tvOS.dismiss()
        }
      })
    })
  } else {
    console.log('Missing it all!')
  }
})
