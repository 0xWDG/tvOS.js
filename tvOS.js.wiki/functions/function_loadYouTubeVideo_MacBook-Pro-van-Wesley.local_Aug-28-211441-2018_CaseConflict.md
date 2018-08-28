# tvOS.loadYouTubeVideo(videoID, callback)

get the mp4 URL of a youtube video

## Parameters

<table><tr><td>Type</td><td>@var</td><td>Description</td><td>Required</td></tr><tr><td>string</td><td>videoID</td><td>the video ID</td><td>Required</td></tr><tr><td>function</td><td>callback</td><td>Callback</td><td>Required</td></tr></table>

## Example

    tvOS.loadYoutubeVideo(videoID, function (video) {
      console.log('Video url=' + video)
    })


<br><br>

[Back to function list](https://github.com/wdg/tvOS.js/wiki/tvOS.js-Function-list)