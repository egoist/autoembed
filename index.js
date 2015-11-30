(function () {
  var re = {
  cloudmusic: /http:\/\/music\.163\.com\/#\/song\?id=(\d+)/i,
   kickstarter: /(https?:\/\/www\.kickstarter\.com\/projects\/\d+\/[a-zA-Z0-9_-]+)(\?\w+\=\w+)?/i,
   youtube: /https?:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)(\?\w+\=\w+)?/i,
  }
  function autoEmbed (url, opts) {
    if (opts.cloudmusic || opts.embed) {
        if (url.indexOf('music.163.com/#/song?id=') > -1) {
          return url.replace(
            re.cloudmusic,
            '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="http://music.163.com/outchain/player?type=2&id=$1&auto=1&height=66"></iframe>'
          )
        }
      }
      if (opts.kickstarter || opts.embed) {
        if (re.kickstarter.test(url)) {
          return url.replace(
            re.kickstarter,
            '<iframe width="480" height="360" src="$1/widget/video.html" frameborder="0" scrolling="no"> </iframe>'
          )
        }
      }
      if (opts.youtube || opts.embed) {
        if (re.youtube.test(url)) {
          return url.replace(
            re.youtube,
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>'
          )
        }
      }
  }
  if (typeof module !== 'undefined') {
    module.exports = autoEmbed
  } else if (typeof window !== 'undefined') {
    window.autoEmbed = autoEmbed
  }
})();
