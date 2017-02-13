/**
 * Created by jhh on 2017/2/10.
 */
let AV = require('../libs/lean');

const router = {
  get:{},
  post:{},
  delete:{}
}

const Video = AV.Object.extend('Video');

router.get.getVideosNew = (req,res)=>{
  let query = new AV.Query('Video');
  //倒序
  query.addDescending('createdAt');
  query.find().then((results)=>{
    res.json(results);
  })
}

//浏览次数
router.get.getVideosHot = (req,res)=>{
  let query = new AV.Query('Video');
  query.addDescending('views');
  query.find().then((results)=>{
    res.json(results);
  })
}

router.post.addVideo = (req,res)=>{
  let url = req.body.url;
  // let user = req.body.user;
  let wordId = req.body.wordId;
  let likeCount = req.body.likeCount;
  let dislikeCount = req.body.dislikeCount;
  let views= req.body.views;

  let video = new Video();

  video.set('url',url);
  video.set('user',req.currentUser);
  video.set('wordId',wordId);
  video.set('likeCount',likeCount);
  video.set('dislikeCount',dislikeCount);
  video.set('views',views);

  video.save().then((video)=>{
    res.json('add success!');
  },err=>{
    res.json(err);
  })
}

router.delete.deleteVideo = (req,res)=>{
  let id = req.params.id;
  let video = AV.Object.createWithoutData('Video',id);
  video.destroy({sessionToken:req.sessionToken}).then(()=>{
    res.json('deleted!');
  },err=>{
    res.json(err);
  })
}

module.exports = router;
