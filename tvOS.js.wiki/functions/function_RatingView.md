# tvOS.RatingView(title, rating, callback)

create a nice RatingView (with support of objects)

## Parameters

<table><tr><td>Type</td><td>@var</td><td>Description</td><td>Required</td></tr><tr><td>string</td><td>title</td><td>the title of your RatingView</td><td>Required</td></tr><tr><td>string</td><td>rating</td><td>the default/averange rating</td><td>Required</td></tr><tr><td>string</td><td>[callback]</td><td>function to relay on (Does not work)</td><td>Optional</td></tr></table>

## Example

    tvOS.RatingView(title, rating, function (clicked) {
      console.log('Clicked on ' + clicked)
    })


<br><br>

[Back to function list](https://github.com/wdg/tvOS.js/wiki/tvOS.js-Function-list)