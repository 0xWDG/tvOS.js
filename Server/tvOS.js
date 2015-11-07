//                        #######    ######              ##   ######
//                       ##     ##  ##    ##             ##  ##    ##
//                       ##     ##  ##                   ##  ##
//  ########  ##     ##  ##     ##   ######              ##   ######
//     ##      ##   ##   ##     ##        ##       ##    ##        ##
//     ##       ## ##    ##     ##  ##    ##  ###  ##    ##  ##    ##
//     ##        ###      #######    ######   ###   ######    ######
//
//                                                              v0.0.1
//
// tvOS.js
// (c) Wesley de Groot
// Licence: CC BY 4.0
//
// Please see:
// - https://github.com/wesdegroot/tvOS.js
// - https://www.wdgwv.com

// * tvOS Storage Library
// *
// * If it is missing (es-lint)
// *
// * @var object Storage
if (typeof Storage === 'undefined') {
  var Storage = {
    clear: function () { },
    getItem: function () { },
    key: function () { },
    length: function () { },
    removeItem: function () { },
    setItem: function () { }
  }
}

// * tvOS MediaItem Library
// *
// * If it is missing (es-lint)
// *
// * @var object MediaItem
if (typeof MediaItem === 'undefined') {
  var MediaItem = {
    MediaItem: function () { },
    contentRatingDomain: function () { },
    contentRatingRanking: function () { },
    isExplicit: function () { },
    artworkImageURL: function () { },
    description: function () { },
    subtitle: function () { },
    title: function () { },
    type: function () { },
    url: function () { },
    highlightGroups: function () { },
    interstitials: function () { },
    resumeTime: function () { },
    loadAssetID: function () { },
    loadCertificate: function () { },
    loadKey: function () { }
  }
}

// * tvOS Restrictions Library
// *
// * If it is missing (es-lint)
// *
// * @var object Restrictions
if (typeof Restrictions === 'undefined') {
  var Restrictions = {
    allowsExplicit: null,
    maxMovieRank: null,
    maxMovieRatingForCountry: null,
    maxTVShowRank: null,
    maxTVShowRatingForCountry: null
  }
}

// * tvOS Settings Library
// *
// * If it is missing (es-lint)
// *
// * @var object Settings
if (typeof Settings === 'undefined') {
  var Settings = {
    restrictions: null,
    language: null,
    onRestrictionsChange: null,
    storefrontCountryCode: null
  }
}

// * tvOS TVError Library
// *
// * If it is missing (es-lint)
// *
// * @var object TVError
if (typeof TVError === 'undefined') {
  var TVError = {
    code: null,
    description: null,
    domain: null,
    userInfo: null
  }
}

// * tvOS Player Library
// *
// * If it is missing (es-lint)
// *
// * @var object Player
if (typeof Player === 'undefined') {
  var Player = {
    overlayDocument: function () { },
    Player: function () { },
    playlist: function () { },
    present: function () { },
    pause: function () { },
    play: function () { },
    playbackState: function () { },
    seekToTime: function () { },
    setPlaybackRate: function () { },
    stop: function () { },
    currentMediaItem: function () { },
    nextMediaItem: function () { },
    previousMediaItem: function () { },
    mediaItemDidChange: function () { },
    mediaItemWillChange: function () { },
    requestSeekToTime: function () { },
    shouldHandleStateChange: function () { },
    stateDidChange: function () { },
    stateWillChange: function () { },
    timeBoundaryDidCross: function () { },
    timeDidChange: function () { },
    timedMetadata: function () { }
  }
}

// * tvOS DOMParser Library
// *
// * If it is missing (es-lint)
// *
// * @var object DOMParser
if (typeof DOMParser === 'undefined') {
  var DOMParser = {
    parseFromString: function () { }
  }
}

// * tvOS Playlist Library
// *
// * If it is missing (es-lint)
// *
// * @var object Playlist
if (typeof Playlist === 'undefined') {
  var Playlist = {
    item: function () { },
    length: null,
    Playlist: function () { },
    pop: function () { },
    push: function () { },
    splice: function () { }
  }
}

// * tvOS MenuBarDocument Library
// *
// * If it is missing (es-lint)
// *
// * @var object MenuBarDocument
if (typeof MenuBarDocument === 'undefined') {
  var MenuBarDocument = {
    getDocument: function () { },
    setDocument: function () { },
    setSelectedItem: function () { }
  }
}

// * tvOS navigationDocument Library
// *
// * If it is missing (es-lint)
// *
// * @var object navigationDocument
if (typeof navigationDocument === 'undefined') {
  var navigationDocument = {
    insertBeforeDocument: null,
    pushDocument: null,
    replaceDocument: null,
    dismissModal: null,
    presentModal: null,
    documents: null,
    clear: null,
    popDocument: null,
    popToDocument: null,
    popToRootDocument: null,
    removeDocument: null
  }
}

// * tvOS Keyboard Library
// *
// * If it is missing (es-lint)
// *
// * @var object Keyboard
if (typeof Keyboard === 'undefined') {
  var Keyboard = {
    text: null,
    onTextChange: function () { }
  }
}

// * tvOS App Library
// *
// * If it is missing (es-lint)
// *
// * @var object App
if (typeof App === 'undefined') {
  var App = {
    onError: null,
    onLaunch: null,
    onExit: null,
    reload: function () {}
  }
}

// * tvOS Device Library
// *
// * If it is missing (es-lint)
// *
// * @var object Device
if (typeof Device === 'undefined') {
  var Device = {
    systemVersion: null,
    appVersion: null,
    appIdentifier: null,
    model: null,
    productType: null,
    vendorIdentifier: null
  }
}

// * tvOS Library
// *
// * Making your work more easy!
// *
// * @var object tvOS
var tvOS = {

  // * tvOS.windows
  // *
  // * Wich windows are loaded?
  // *
  // * @var object
  windows: {
    windowActive: '',
    alertActive: false,
    loadingActive: false
  },

  // * tvOS.js
  // *
  // * tvOS.js
  // *
  // * @var object js
  js: {
    version: '0.0.1',
    date: '03-NOV-2015',
    release: 'beta'
  },

  // * tvOS.version
  // *
  // * The tvOS version.
  // *
  // * @var string version
  version: Device.systemVersion,

  // * tvOS.appVersion
  // *
  // * The current app version.
  // *
  // * @var string appVersion
  appVersion: Device.appVersion,

  // * tvOS.appIdentifier
  // *
  // * The current app Identifier.
  // *
  // * @var string appIdentifier
  appIdentifier: Device.appIdentifier,

  // * tvOS.model
  // *
  // * A string that identifies the device model.
  // *
  // * @var string model
  model: Device.model,

  // * tvOS.productType
  // *
  // * The version of the product installed on the Apple TV.
  // *
  // * @var string productType
  productType: Device.productType,

  // * tvOS.vendorIdentifier
  // *
  // * The universally unique identifier (UUID) of the device.
  // *
  // * @var string vendorIdentifier
  vendorIdentifier: Device.vendorIdentifier,

  // * tvOS.vendorIdentifier
  // *
  // * The universally unique identifier (UUID) of the device.
  // *
  // * @var string vendorIdentifier
  uuid: Device.vendorIdentifier,

  // * tvOS.device
  // *
  // * tvOS.device Device information
  // *
  // * @var object device
  device: {
    // * tvOS.device.version
    // *
    // * The tvOS version.
    // *
    // * @var string version
    version: Device.systemVersion,

    // * tvOS.device.appVersion
    // *
    // * The current app version.
    // *
    // * @var string appVersion
    appVersion: Device.appVersion,

    // * tvOS.device.appIdentifier
    // *
    // * The current app Identifier.
    // *
    // * @var string appIdentifier
    appIdentifier: Device.appIdentifier,

    // * tvOS.device.model
    // *
    // * A string that identifies the device model.
    // *
    // * @var string model
    model: Device.model,

    // * tvOS.device.productType
    // *
    // * The version of the product installed on the Apple TV.
    // *
    // * @var string productType
    productType: Device.productType,

    // * tvOS.device.vendorIdentifier
    // *
    // * The universally unique identifier (UUID) of the device.
    // *
    // * @var string vendorIdentifier
    vendorIdentifier: Device.vendorIdentifier,

    // * tvOS.device.vendorIdentifier
    // *
    // * The universally unique identifier (UUID) of the device.
    // *
    // * @var string vendorIdentifier
    uuid: Device.vendorIdentifier
  },

  // Useless function i'm used to create a test...
  test: function () {
    console.log('testing')
  },

  /**
   * alert
   *
   * Display an Alert message
   *
   * @param string title the title
   * @param string description the description
   * @param array buttons the buttons
   * @param function callback the callback
   * @example tvOS.alert('Update Avable', 'Update now', ['Yes', 'No'], function (e) { console.log('Clicked: ' + event) })
   */
  alert: function (title, description, buttons, callback) {
    if (typeof description === 'undefined') description = ' '

    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
     <alertTemplate>
      <title>${title}</title>
      <description>${description}</description>`

    if (typeof buttons !== 'object') buttons = ['ok']

    for (var i = 0; i < buttons.length; i++) {
      alertString += `<button>
       <text>` + buttons[i] + `</text>
      </button>`
    }

    alertString += `</alertTemplate>
    </document>`

    var parser = new DOMParser()
    var alertDoc = parser.parseFromString(alertString, 'application/xml')
    if (typeof callback !== 'undefined') {
      alertDoc.addEventListener('select', function (e) {
        // Fix nasty return
        var pressed = e.target.innerHTML
        pressed = pressed.split('>')[1]
        pressed = pressed.split('<')[0]

        // Human readable!
        callback(pressed)
      }, false)
    } else {
      alertDoc.addEventListener('select', function (e) {
        var pressed = e.target.innerHTML
        pressed = pressed.split('>')[1]
        pressed = pressed.split('<')[0]

        navigationDocument.dismissModal(alertDoc)
        tvOS.windows.alertActive = false
        return pressed
      }, false)
    }
    navigationDocument.presentModal(alertDoc)
    this.windows.windowActive = alertDoc
    this.windows.alertActive = true
  },

  /**
   * removeOldDocument
   *
   * Removes the old document
   *
   * @internal
   * @example tvOS.removeOldDocument()
   */
  removeOldDocument: function () {
    if (this.windows.windowActive !== '') {
      navigationDocument.dismissModal(this.windows.windowActive)
    }
  },

  /**
   * reload
   *
   * Reload the app
   *
   * @example tvOS.reload()
   */
  reload: function () {
    App.reload()
  },

  /**
   * makeDocument
   *
   * make Document with resource
   *
   * @param string resource the resource
   * @example tvOS.makeDocument(xmlString)
   */
  makeDocument: function (resource) {
    if (!tvOS.parser) {
      tvOS.parser = new DOMParser()
    }

    var doc = tvOS.parser.parseFromString(resource, 'application/xml')
    return doc
  },

  /**
   * showLoadingIndicator
   *
   * Show a loading indicator
   *
   * @param [string] text loading text
   * @param [string] presentation last presentation
   * @example tvOS.showLoadingIndicator(text, presentation)
   */
  showLoadingIndicator: function (text, presentation) {
    this.removeOldDocument()
    if (typeof text === 'undefined') {
      text = 'Loading'
    }

    if (!this.windows.loadingIndicator) {
      this.loadingIndicator = this.makeDocument(this.loadingTemplate.replace('%s', text))
      this.windows.windowActive = this.loadingIndicator
    }

    if (!this.windows.loadingIndicator &&
        presentation !== 'modalDialogPresenter' &&
        presentation !== 'menuBarItemPresenter') {
      navigationDocument.pushDocument(this.loadingIndicator)
      this.windows.loadingIndicator = true
    }
  },

  /**
   * removeLoadingIndicator
   *
   * Remove the loading indicator
   *
   * @example tvOS.removeLoadingIndicator()
   */
  removeLoadingIndicator: function () {
    if (this.windows.loadingIndicator) {
      navigationDocument.removeDocument(this.loadingIndicator)
      this.removeOldDocument()
      this.windows.loadingIndicator = false
    }
  },

  /**
   * log
   *
   * to console.log (with support of objects)
   *
   * @param mixed object the object you want to parse
   * @example tvOS.log(object)
   */
  log: function (object) {
    if (typeof object === 'object') {
      for (var i in object) {
        console.log('[log] ' + i + ' = ' + object[i])
      }
    } else {
      console.log(object)
    }
  },

  /**
   * dismiss
   *
   * to dismiss a view
   *
   * @example tvOS.dismiss()
   */
  dismiss: function () {
    this.removeOldDocument() // Shortcut :)
  },

  /**
   * load
   *
   * internal function, do not use
   * loads the target of a 'listView'
   *
   * @param string event the event
   * @example tvOS.load(event)
   */
  load: function (event) {
    var ele = event.target
    // var templateURL = ele.getAttribute('template')
    var presentation = ele.getAttribute('presentation')

    if (typeof event.target.getAttribute('presentation') === 'string') {
      try {
        eval(event.target.getAttribute('presentation') + '(' + presentation + ')') //eslint-disable-line
      } catch (err) {
        console.log('Error with callback')
        console.log(err)
      }
    }
  },

  /**
   * display
   *
   * to display a view
   *
   * @param mixed view the view you want to display
   * @example tvOS.display(view)
   */
  display: function (view) {
    navigationDocument.pushDocument(view)
  },

  /**
   * listView
   *
   * create a nice listView (with support of objects)
   *
   * @param string title the title of your listView
   * @param array list the list (see example)
   * @param string [banner] full url for banner (optional)
   * @example tvOS.listView(title, list, banner)
   */
  listView: function (title, list, banner) {
    if (typeof banner === 'undefined') {
      banner = ''
    } else {
      banner = `<banner>
        <background>
          <img src="${banner}" width="1920" height="360" />
        </background>
      </banner>`
    }

    var temp = tvOS.ListViewTemplate_before.replace('tvOS_title', title)
                                           .replace('tvOS_banner', banner)

    if (typeof list === 'object') {
      for (var i = 0; i < list.length; i++) {
        temp += tvOS.ListViewTemplate_while.replace('tvOS_title', (
                                            (typeof list[i]['title'] !== 'undefined')
                                            ? list[i]['title']
                                            : 'Help'
                                           ))
                                           .replace('tvOS_description', (
                                            (typeof list[i]['description'] !== 'undefined')
                                            ? list[i]['description']
                                            : 'Please read the manual: '
                                           ))
                                           .replace('tvOS_action', (
                                            (typeof list[i]['action'] !== 'undefined')
                                            ? list[i]['action']
                                            : 'tvOS._error'
                                           ))
                                           .replace('tvOS_image', (
                                            (typeof list[i]['image'] !== 'undefined')
                                            ? list[i]['image']
                                            : 'https://www.wdgwv.com/logo.png'
                                           ))
                                           .replace('tvOS_template', (
                                            (typeof list[i]['template'] !== 'undefined')
                                            ? list[i]['template']
                                            : 'none'
                                           ))
                                           .replace('tvOS_helpText', (
                                            (typeof list[i]['accessibilityText'] !== 'undefined')
                                            ? list[i]['accessibilityText']
                                            : 'Error'
                                           ))
      }
    } else {
      temp += tvOS.ListViewTemplate_while.replace('tvOS_title', 'Help')
                                         .replace('tvOS_description', 'Please read the manual: ')
                                         .replace('tvOS_action', 'tvOS._error')
                                         .replace('tvOS_image', 'https://www.wdgwv.com/logo.png')
                                         .replace('tvOS_template', 'none')
                                         .replace('tvOS_helpText', 'Error')
    }

    temp += tvOS.ListViewTemplate_after

    temp = this.makeDocument(temp)
    temp.addEventListener('select', tvOS.load.bind(tvOS))
    this.display(temp)
  },

  /**
   * RatingView
   *
   * create a nice RatingView (with support of objects)
   *
   * @param string title the title of your RatingView
   * @param string rating the default/averange rating
   * @param string callback function to relay on
   * @example tvOS.RatingView(title, rating, callback)
   */
  RatingView: function (title, rating, callback) {
    var temp = ''

    temp += tvOS.TemplateRatingView.replace('tvOS_title', title)
                                   .replace('tvOS_rating', rating)

    temp = tvOS.makeDocument(temp)
    temp.addEventListener('select', function (e) {
      console.log(e)
      var pressed = e.target.innerHTML
      console.log(pressed)
    })

    tvOS.display(temp)
  },

  /**
   * CompilationView
   *
   * create a nice CompilationView (with support of objects)
   *
   * @param string title the title of your CompilationView
   * @param string subtitle the subtitle of your CompilationView
   * @param string text the text of your CompilationView
   * @param string image the image of your CompilationView
   * @param array list the list (see example)
   * @param array buttons the buttons (see example)
   * @example tvOS.CompilationView(title, subtitle, text, image, items, buttons)
   */
  CompilationView: function (title, subtitle, text, image, items, buttons) {
    this.Compilation(title, subtitle, text, image, items, buttons)
  },

  /**
   * Compilation
   *
   * create a nice CompilationView (with support of objects)
   *
   * @param string title the title of your CompilationView
   * @param string subtitle the subtitle of your CompilationView
   * @param string text the text of your CompilationView
   * @param string image the image of your CompilationView
   * @param array list the list (see example)
   * @param array buttons the buttons (see example)
   * @example tvOS.Compilation(title, subtitle, text, image, items, buttons)
   */
  Compilation: function (title, subtitle, text, image, items, buttons) {
    var temp = ''
    var _buttons = ''

    if (typeof buttons !== 'undefined') {
      for (var b = 0; b < buttons.length; b++) {
        _buttons += `<buttonLockup>
                       <badge src="${buttons[b]['image']}" class="whiteButton" />
                       <title>${buttons[b]['title']}</title>
                     </buttonLockup>`
      }
    }

    temp += tvOS.CompilationView_before.replace('tvOS_title', title)
                                       .replace('tvOS_image', image)
                                       .replace('tvOS_subtitle', subtitle)
                                       .replace('tvOS_text', text)
                                       .replace('tvOS_buttons', _buttons)

    if (typeof items !== 'object') {
      items = [{
        title: 'Error',
        subtitle: 'Please read the redme',
        decoration: '🤓'
      }]
    }

    for (var i = 0; i < items.length; i++) {
      temp += tvOS.CompilationView_while.replace('tvOS_title', (
                                          (typeof items[i]['title'] !== 'undefined')
                                          ? items[i]['title']
                                          : 'Error'
                                        ))
                                        .replace('tvOS_subtitle', (
                                          (typeof items[i]['subtitle'] !== 'undefined')
                                          ? items[i]['subtitle']
                                          : ' '
                                        ))
                                        .replace('tvOS_decoration', (
                                          (typeof items[i]['decoration'] !== 'undefined')
                                          ? items[i]['decoration']
                                          : ' '
                                        ))
                                        .replace('tvOS_item', i + 1)
    }

    temp += tvOS.CompilationView_after
    temp = tvOS.makeDocument(temp)
    temp.addEventListener('select', function (e) {
      var pressed = e.target.innerHTML
      pressed = pressed.split('<title')[1]
      pressed = pressed.split('/title>')[0]
      pressed = pressed.split('>')[1]
      pressed = pressed.split('<')[0]

      for (var s = 0; s < items.length; s++) {
        if (pressed === items[s]['title']) {
          items[s]['action'](pressed)
        }
      }
      if (typeof buttons !== 'undefined') {
        for (var b = 0; b < buttons.length; b++) {
          if (pressed === buttons[b]['title']) {
            buttons[b]['action'](pressed)
          }
        }
      }
    })
    tvOS.display(temp)
  },

  /**
   * error
   *
   * Please do not use, this is a internal function
   * create a nice error
   *
   * @example tvOS.error()
   */
  _error: function () {
    this.alert('Please read the manual.')
  },

  // * tvOS.loadingTemplate
  // *
  // * Template for loading screen
  // *
  // * @var string loadingTemplate
  loadingTemplate: `<?xml version='1.0' encoding='UTF-8' ?>
        <document>
          <loadingTemplate>
            <activityIndicator>
              <text>%s...</text>
            </activityIndicator>
          </loadingTemplate>
        </document>`,

  // * tvOS.ListViewTemplate_before
  // *
  // * Template for listView (before)
  // *
  // * @var string ListViewTemplate_before
  ListViewTemplate_before: `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <head>
            <style>
              .descriptionLayout {
                tv-text-max-lines: 8;
              }
            </style>
          </head>
          <listTemplate>
            tvOS_banner
            <list>
              <header>
                <title>tvOS_title</title>
              </header>

              <section>`,

  // * tvOS.ListViewTemplate_while
  // *
  // * Template for listView (while parsing items)
  // *
  // * @var string ListViewTemplate_while
  ListViewTemplate_while: `
                <listItemLockup template="tvOS_template" presentation="tvOS_action" accessibilityText="tvOS_helpText">
                  <title>tvOS_title</title>
                  <relatedContent>
                    <lockup>
                      <img src="tvOS_image" width="857" height="482" />
                      <title>tvOS_title</title>
                      <description class="descriptionLayout">tvOS_description</description>
                    </lockup>
                  </relatedContent>
                </listItemLockup>`,

  // * tvOS.ListViewTemplate_after
  // *
  // * Template for listView (after)
  // *
  // * @var string ListViewTemplate_after
  ListViewTemplate_after: `
              </section>
            </list>
          </listTemplate>
        </document>`,

  // * tvOS.CompilationView_before
  // *
  // * Template for CompilationView (before)
  // *
  // * @var string CompilationView_before
  CompilationView_before: `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .ordinalLayout {
      margin: 8 0 0 9;
    }
    .whiteButton {
      tv-tint-color: rgb(255, 255, 255);
    }
    </style>
  </head>
  <compilationTemplate theme="dark">
    <list>
      <relatedContent>
        <itemBanner>
          <heroImg src="tvOS_image" />
          <row>
            tvOS_buttons
          </row>
        </itemBanner>
      </relatedContent>
      <header>
        <title>tvOS_title</title>
        <subtitle>tvOS_subtitle</subtitle>
        <row>
          <text>tvOS_text</text>
        </row>
      </header>
      <section>
        <header>
          <title> </title>
        </header>`,

  // * tvOS.CompilationView_while
  // *
  // * Template for CompilationView (while)
  // *
  // * @var string CompilationView_while
  CompilationView_while: `
        <listItemLockup>
          <ordinal minLength="2" class="ordinalLayout">tvOS_item</ordinal>
          <title>tvOS_title</title>
          <subtitle>tvOS_subtitle</subtitle>
          <decorationLabel>tvOS_decoration</decorationLabel>
        </listItemLockup>`,

  // * tvOS.CompilationView_after
  // *
  // * Template for CompilationView (after)
  // *
  // * @var string CompilationView_after
  CompilationView_after: `
      </section>
    </list>
  </compilationTemplate>
</document>`,

  // * tvOS.TemplateRatingView
  // *
  // * Template for TemplateRating
  // *
  // * @var string TemplateRatingView
  TemplateRatingView: `<?xml version="1.0" encoding="UTF-8"?>
<document>
  <ratingTemplate>
      <title>tvOS_title</title>
      <ratingBadge value="tvOS_rating"></ratingBadge>
  </ratingTemplate>
</document>`

}

// * Loaded
// *
// * tvOS.js Loaded
// *
// * @var object js
console.log('tvOS.js v' + tvOS.js.version + ' ' + tvOS.js.release)

/*
 * App.onError
 *
 * App.onError Log & Reload.
 */
App.onError = function (error) {
  console.log(error)
  App.reload()
}

// END OF tvOS.js
