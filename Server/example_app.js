if (App === 'undefined') var App = {} // Eslint error.
if (tvOS === 'undefined') var tvOS = {} // Eslint error.
if (evaluateScripts === 'undefined') var evaluateScripts = {} // Eslint error.

evaluateScripts(['http://localhost:9001/tvOS.js'], function (success) {
  if (success) {
    // init App.
    var old_count = ''
    var myArray = []
    var count = 0

    // load data
    tvOS.ajax('http://api.the-app-team.com/StartUp/', 'GET', function (data) {
      data = JSON.parse(data)

      for (var i in data) {
        myArray.push({
          title: data[i]['title'],
          description: data[i]['description'],
          subtitle: data[i]['date'],
          action: 'clickedOn',
          accessibilityText: 'None'
        })

        count++
      }
    })

    var publish_checker = function () {
      if (old_count === count) {
        tvOS.listView('Meetups in Amsterdam', myArray, 'http://the-app-team.com/assets/images/logo.png')
      } else {
        old_count = count
        setTimeout(publish_checker, 100)
      }
    }
    setTimeout(publish_checker, 100)
  } else {
    console.log('Missing it all!')
  }
})

function clickedOn (event) {
  tvOS.alert(event, 'Return to example list?', ['Yes', 'No'], function (event) {
    if (event.toLowerCase() === 'yes') {
      tvOS.location('http://localhost:9001/index.js')
    } else {
      tvOS.dismiss() // Remove alert!
    }
  })
}

// Becouse that weird eslint hates functions :/
if (typeof clickedOn === 'undefined') console.log('ok')
