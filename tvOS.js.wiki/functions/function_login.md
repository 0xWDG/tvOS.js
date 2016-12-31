# tvOS.login(title, callback, text, image, callback_register, register, needPWD)

a login form!

## Parameters

<table><tr><td>Type</td><td>@var</td><td>Description</td><td>Required</td></tr><tr><td>string</td><td>title</td><td>title of the login screen</td><td>Required</td></tr><tr><td>function</td><td>callback</td><td>Callback</td><td>Required</td></tr><tr><td>string</td><td>text</td><td>button text</td><td>Required</td></tr><tr><td>string</td><td>[image]</td><td>show a image?</td><td>Optional</td></tr><tr><td>function</td><td>[callback_register]</td><td>register callback action</td><td>Optional</td></tr><tr><td>string</td><td>[register]</td><td>register button text (empty=none)</td><td>Optional</td></tr></table>

## Example

    tvOS.login('Please login', function (data) {
      console.log(data)
    }, 'Login', '', function (register_email) {
      console.log(register_email)
    }, 'Register') // Example with Register (no image)


<br><br>

[Back to function list](https://github.com/wdg/tvOS.js/wiki/tvOS.js-Function-list)