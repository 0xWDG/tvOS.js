# tvOS.searchView(search, results, items, callback_on_search, callback_on_select)

create a nice searchView (with support of objects)

## Parameters

<table><tr><td>Type</td><td>@var</td><td>Description</td><td>Required</td></tr><tr><td>string</td><td>search</td><td>the title of your search field</td><td>Required</td></tr><tr><td>string</td><td>results</td><td>the subtitle of your results view</td><td>Required</td></tr><tr><td>array</td><td>items</td><td>the 'returned' items (see example)</td><td>Required</td></tr><tr><td>function</td><td>[callback_on_search]</td><td>The callback function when searching</td><td>Optional</td></tr><tr><td>function</td><td>[callback_on_select]</td><td>The callback function when clicking on a 'item'</td><td>Optional</td></tr></table>

## Example

    tvOS.searchView(search, results, items, function (typed) {
      console.log('Typed: ' + typed)
    }, function (selected) {
      console.log('Selected: ' + selected)
    })


<br><br>

[Back to function list](https://github.com/wdg/tvOS.js/wiki/tvOS.js-Function-list)