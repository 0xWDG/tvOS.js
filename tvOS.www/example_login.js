if (App === 'undefined') var App = {} // Eslint error.
if (tvOS === 'undefined') var tvOS = {} // Eslint error.
if (evaluateScripts === 'undefined') var evaluateScripts = {} // Eslint error.

evaluateScripts(['https://wdg.github.io/tvOS.js/tvOS.js'], function (success) {
  if (success) {
    tvOS.login('Hi', function (user, pass) {
      console.log(user)
      console.log(pass)
    }, 'Login!', '', function (register_data) {
      console.log(register_data)
    }, 'Register?') // TriCK
  } else {
    console.log('Missing it all!')
  }
})
