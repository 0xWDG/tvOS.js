if (App === 'undefined') var App = {} // Eslint error.
if (tvOS === 'undefined') var tvOS = {} // Eslint error.
if (evaluateScripts === 'undefined') var evaluateScripts = {} // Eslint error.

evaluateScripts(['http://localhost:9001/tvOS.js'], function (success) {
  if (success) {
    var myArray = []

    myArray.push({
      image: 'https://www.wdgwv.com/logo.png',
      title: 'test 1',
      description: 'myDescription',
      template: 'tempL',
      action: 'myCustomFunctionForAction_test1',
      accessibilityText: 'None'
    })

    myArray.push({
      image: 'https://www.wdgwv.com/logo.png',
      title: 'test 2',
      description: 'myDescription',
      template: 'tempL',
      action: 'myCustomFunctionForAction_test2',
      accessibilityText: 'None'
    })

    myArray.push({
      image: 'https://www.wdgwv.com/logo.png',
      title: 'test 3',
      description: 'myDescription',
      template: 'tempL',
      action: 'myCustomFunctionForAction_test3',
      accessibilityText: 'None'
    })

    tvOS.listView('TV Demo', myArray)
  } else {
    console.log('Missing it all!')
  }
})

function myCustomFunctionForAction_test3 (event) {
  tvOS.alert('Hi!')
}
