if (App === 'undefined') var App = {} // Eslint error.
if (tvOS === 'undefined') var tvOS = {} // Eslint error.
if (evaluateScripts === 'undefined') var evaluateScripts = {} // Eslint error.

evaluateScripts(['http://localhost:9001/tvOS.js'], function (success) {
  if (success) {
    var myArray = []

    myArray.push({
      title: 'test 1',
      image: 'https://www.wdgwv.com/logo.png'
    })

    myArray.push({
      title: 'test 2',
      image: 'https://www.wdgwv.com/logo.png'
    })

    myArray.push({
      title: 'test 3',
      image: 'https://www.wdgwv.com/logo.png'
    })

    // search, results, items, callback_on_search, callback_on_select
    tvOS.searchView(' Search', 'TV Demo Results', myArray, function (e) {
      console.log('Searched: ' + e)
    }, function (e) {
      console.log('Clicked: ' + e)
      if (e === 'test 2') {
        tvOS.location('http://localhost:9001/index.js')
      }
    })
  } else {
    console.log('Missing it all!')
  }
})
