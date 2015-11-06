if (App === 'undefined') var App = {} // Eslint error.
if (tvOS === 'undefined') var tvOS = {} // Eslint error.
if (evaluateScripts === 'undefined') var evaluateScripts = {} // Eslint error.

evaluateScripts(['http://localhost:9001/tvOS.js'], function (success) {
  if (success) {
    var myArray = []

    myArray.push({
      image: 'https://www.wdgwv.com/logo.png',
      title: 'test 1',
      description: 'my Description',
      action: 'myCustomFunctionForAction_test1',
      accessibilityText: 'None'
    })

    myArray.push({
      image: 'https://www.wdgwv.com/logo.png',
      title: 'test 2',
      description: 'my Description',
      action: 'myCustomFunctionForAction_test2',
      accessibilityText: 'None'
    })

    myArray.push({
      image: 'https://www.wdgwv.com/logo.png',
      title: 'test 3',
      description: 'my Description',
      action: 'myCustomFunctionForAction_test3',
      accessibilityText: 'None'
    })

    tvOS.listView('TV Demo', myArray, 'https://www.wdgwv.com/banner.png')
  } else {
    console.log('Missing it all!')
  }
})

function myCustomFunctionForAction_test3 (event) {
  tvOS.alert('Hi!')
}

function myCustomFunctionForAction_test1 (event) {
  tvOS.alert('Warning', 'Sure reload?', ['Yes', 'No'], function (event) {
    if (event.toLowerCase() === 'yes') {
      tvOS.reload() // Sometimes it won't reload good.
      // Nov  6 20:38:27  TVapp[17402] <Error>: CGBitmapContextCreate: unsupported parameter combination: set CGBITMAP_CONTEXT_LOG_ERRORS environmental variable to see the details
    } else {
      tvOS.dismiss() // Remove alert!
    }
  })
}