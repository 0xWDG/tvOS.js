if (App === 'undefined') var App = {} // Eslint error.
if (tvOS === 'undefined') var tvOS = {} // Eslint error.
if (evaluateScripts === 'undefined') var evaluateScripts = {} // Eslint error.

evaluateScripts(['https://wdg.github.io/tvOS.js/tvOS.js'], function (success) {
  if (success) {
    // init App.
    var old_count = ''
    var myArray = []
    var count = 0

    // load data
    tvOS.ajax('https://ajax.googleapis.com/ajax/services/feed/load?v=2.0&q=https://twitrss.me/twitter_user_to_rss/?user=wesdegroot&num=20', 'GET', function (data) {
      data = JSON.parse(data)
      data = data['responseData']['feed']['entries']
      for (var i in data) {
        var t = data[i]['content'].split('src="')
        if (typeof t[1] !== 'undefined') {
          t = t[1].split('"')[0]
        } else {
          t = undefined
        }
        myArray.push({
          image: t,
          title: data[i]['title'],
          description: tvOS.removeHTML(data[i]['content']), // Remove HTML.
          subtitle: String(new Date(data[i]['publishedDate'])).substring(0, 24), // better :)
          action: 'clickedOn',
          accessibilityText: 'None'
        })

        count++
      }
    })

    var publish_checker = function () {
      if (old_count === count) {
        tvOS.listView('Twitter: @wesdegroot', myArray)
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
      tvOS.location('https://wdg.github.io/tvOS.js/index.js')
    } else {
      tvOS.dismiss() // Remove alert!
    }
  })
}

// Becouse that weird eslint hates functions :/
if (typeof clickedOn === 'undefined') console.log('ok')
