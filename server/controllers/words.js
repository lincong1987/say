/**
 * Created by jhh on 2017/2/9.
 */
let AV = require('../libs/lean');

const router = {
  get:{},
  post:{},
  delete:{}
}

const Word = AV.Object.extend('Word');

router.get.getAllWords = (req,res)=>{
  let query = new AV.Query('Word');
  query.find().then((results)=>{
    //an array
    res.json(results);
  })
}
router.post.addWord = (req,res)=>{
  let wordname = req.body.wordname;
  let videosCount = req.body.videosCount;
  let word = new Word();
  //所有人可读可写
  var acl = new AV.ACL(req.currentUser);
  acl.setPublicReadAccess(true);
  acl.setPublicWriteAccess(true);
  word.setACL(acl);

  word.set('wordname',wordname);
  word.set('videosCount',videosCount);
  word.save().then(()=>{
    res.json('add success!');
  },err=>{
    res.json(err)
  });
}
router.delete.deleteWord = (req,res)=>{
  let id = req.params.id;
  let word = AV.Object.createWithoutData('Word',id);
  // {
  //   "objectId": "589bf03761ff4b006b2f3770"
  // }
  word.destroy({sessionToken:req.sessionToken}).then(()=>{
    res.json('deleted!')
  },err=>{
    res.json(err);
  });
}

module.exports = router;
