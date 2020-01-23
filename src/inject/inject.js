chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval)

      function doSearch (text, backgroundColor) {
        if (window.find && window.getSelection) {
          document.designMode = 'on'
          var sel = window.getSelection()
          sel.collapse(document.body, 0)

          while (window.find(text)) {
            document.execCommand('HiliteColor', false, backgroundColor)
            sel.collapseToEnd()
          }
          document.designMode = 'off'
        }
      }

      doSearch('lucy', 'blue')
    }
  }, 10)
})
