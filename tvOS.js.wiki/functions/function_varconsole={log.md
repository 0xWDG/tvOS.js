# tvOS.varconsole={log()

Display an Alert message

## Parameters

<table><tr><td>Type</td><td>@var</td><td>Description</td><td>Required</td></tr><tr><td>string</td><td>title</td><td>the title</td><td>Required</td></tr><tr><td>string</td><td>description</td><td>the description</td><td>Required</td></tr><tr><td>array</td><td>buttons</td><td>the buttons</td><td>Required</td></tr><tr><td>function</td><td>callback</td><td>the callback</td><td>Required</td></tr></table>

## Example

    tvOS.alert('Update Avable', 'Update now', ['Yes', 'No'], function (e) { console.log('Clicked: ' + event) })


<br><br>

[Back to function list](https://github.com/wdg/tvOS.js/wiki/tvOS.js-Function-list)