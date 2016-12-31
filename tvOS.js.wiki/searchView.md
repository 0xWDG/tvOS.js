# `tvOS.searchView(...)`
### Example (gif)


![searchView](https://rawgit.com/wdg/tvOS.js/tvOS.wiki-data/searchView.gif)

### Example code:

    evaluateScripts(['https://wdg.github.io/tvOS.js/tvOS.js'], function (success) {
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
            tvOS.location('https://wdg.github.io/tvOS.js/index.js')
          }
        })
      } else {
        console.log('Missing it all!')
      }
    })

### Discussion

Go to: [issues/7](https://github.com/wdg/tvOS.js/issues/7)

