# `tvOS.compilationView(...)`
### Example (gif)


![compilationView](https://rawgit.com/wdg/tvOS.js/tvOS.wiki-data/compilationView.gif)

### Example code:

    evaluateScripts(['https://wdg.github.io/tvOS.js/tvOS.js'], function (success) {
      if (success) {
        var myList = []
        var myButtons = []
    
        myList.push({
          image: 'https://www.wdgwv.com/logo.png',
          title: 'test 1',
          subtitle: 'my subtitle',
          decoration: '*',
          action: function (e) {
            tvOS.alert('You clicked on: ' + e)
          }
        })
    
        myList.push({
          image: 'https://www.wdgwv.com/logo.png',
          title: 'test 2',
          subtitle: 'my subtitle',
          decoration: '*',
          action: function (e) {
            tvOS.alert('You clicked on: ' + e)
          }
        })
    
        myList.push({
          image: 'https://www.wdgwv.com/logo.png',
          title: 'test 3',
          subtitle: 'my subtitle',
          decoration: '*',
          action: function (e) {
            tvOS.alert('You clicked on: ' + e)
          }
        })
    
        myButtons.push({
          image: 'resource://button-add-alt',
          title: '+',
          action: function (e) {
            tvOS.alert('+')
          }
        })
    
        myButtons.push({
          image: 'resource://button-rate',
          title: '*',
          action: function (e) {
            tvOS.alert('*')
          }
        })
    
        myButtons.push({
          image: 'resource://button-more',
          title: '...',
          action: function (e) {
            tvOS.alert('Reloading :)')
            tvOS.reload()
          }
        })
        tvOS.Compilation('TV Demo', 'In a few seconds', 'This will be easy!', 'https://www.wdgwv.com/logo.png', myList, myButtons)
      } else {
        console.log('Missing it all!')
      }
    })

### Discussion

Go to: [issues/4](https://github.com/wdg/tvOS.js/issues/4)

