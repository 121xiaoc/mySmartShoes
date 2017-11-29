var crypto = require('crypto')

export default {
  md5: function (string) {
    var md5 = crypto.createHash('md5')
    md5.update(string)
    return md5.digest('hex')
  },
  pop: function (msg) {
    if ($('#pop').length > 0) {
      $('#pop p').html(msg)
    } else {
      $('body').append('<div class="pop fade" id="pop"><p>' + msg + '</p></div>')
    }
    $('#pop').removeClass('fade')
    setTimeout(function () {
      $('#pop').addClass('fade')
    }, 3000)
  }
}
