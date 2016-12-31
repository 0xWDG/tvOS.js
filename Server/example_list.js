if (App === 'undefined') var App = {} // Eslint error.
if (tvOS === 'undefined') var tvOS = {} // Eslint error.
if (evaluateScripts === 'undefined') var evaluateScripts = {} // Eslint error.

evaluateScripts(['http://localhost:9001/tvOS.js'], function (success) {
  if (success) {
    var myArray = []

    myArray.push({
      image: 'https://www.wdgwv.com/logo.png',
      title: 'test 1',
      subtitle: 'return',
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
      subtitle: 'i want it all!',
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
  tvOS.alert('Warning', 'Sure go back?', ['Yes', 'No'], function (event) {
    if (event.toLowerCase() === 'yes') {
      tvOS.location('http://localhost:9001/index.js')
    } else {
      tvOS.dismiss() // Remove alert!
    }
  })
}

// Becouse that weird eslint hates functions :/
if (typeof myCustomFunctionForAction_test1 === 'undefined') console.log('ok')
if (typeof myCustomFunctionForAction_test3 === 'undefined') console.log('ok')
