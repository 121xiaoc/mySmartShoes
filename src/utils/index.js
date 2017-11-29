var crypto = require('crypto')

export default {
  md5: function (string) {
    var md5 = crypto.createHash('md5')
    md5.update(string)
    return md5.digest('hex')
  }
}
