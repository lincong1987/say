// import AV from 'leanengine'

var AV = require ('leanengine')

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || '0rHOmlcHdGfEtc8uu4y6HQNr-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'z6yQY7y9ENxMiLeNtYG8S5d0',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || '8gYBr3ytdG9ulveDXbrYXHeg'
})

AV.Cloud.useMasterKey()

module.exports= AV;
// export default AV
