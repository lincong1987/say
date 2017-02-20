// import AV from 'leanengine'

var AV = require ('leanengine')

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'tBYXJI2d9AGFTgyibYrQa3d0-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'SSRRWBPt9oQJQzBP9orwt10r',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'SHezTpcl9qjouUiDuPlv4oa7'
})

AV.Cloud.useMasterKey()

module.exports= AV;
// export default AV
