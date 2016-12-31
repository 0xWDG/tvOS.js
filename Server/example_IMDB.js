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
    tvOS.ajax('https://api.themoviedb.org/3/movie/popular?api_key=23afca60ebf72f8d88cdcae2c4f31866', 'GET', function (data) {
      // Grabbed API KEY FROM
      // -> https://github.com/ChristianLysne/TVOS-Example
      data = JSON.parse(data)
      data = data['results']
      for (var i in data) {
        console.log('Adding ' + data[i]['title'])
        console.log(data[i]['overview'])
        console.log(data[i]['release_date'] + ' - ' + data[i]['vote_average'] + '/10.0')

        myArray.push({
          image: 'https://image.tmdb.org/t/p/w500' + data[i]['poster_path'],
          title: data[i]['title'],
          description: data[i]['overview'],
          subtitle: data[i]['release_date'] + ' - ' + data[i]['vote_average'] + '/10.0',
          action: 'clickedOn',
          accessibilityText: 'None'
        })

        count++
      }
    })

    var publish_checker = function () {
      if (old_count === count && myArray.length > 0) {
        tvOS.listView('IMDB', myArray)
      } else {
        old_count = count
        setTimeout(publish_checker, 500)
      }
    }
    setTimeout(publish_checker, 500)
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
