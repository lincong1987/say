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
//特定单词，按like数倒序
router.get.getVideosByWord = (req,res)=>{
  let query = new AV.Query('Video');
  let query1 = new AV.Query('Word');
  let wordname = req.params.wordname;
  // 根据wordname查id
  query1.equalTo('wordname',wordname);
  query1.select('objectId');
  query1.find().then((result)=>{
    let wordId = result.objectId;
    let word = AV.Object.createWithoutData('Word', wordId);

    query.equalTo('word', word);

    // 想在查询的同时获取关联对象的属性则一定要使用 `include` 接口用来指定返回的 `key`
    query.include('word');
    // 倒序
    query.addDescending('likeCount');
    query.find().then((results)=>{
      res.json(results);
    })
  })
}
router.post.addVideo = (req,res)=>{
  let url = req.body.url;
  let user = req.body.user;
  let wordname = req.body.wordname;
  let likeCount = req.body.likeCount;
  let dislikeCount = req.body.dislikeCount;
  let views= req.body.views;

  let video = new Video();
  // let word = AV.Object.createWithoutData('Word', wordId);
  let query = new AV.Query("Word");
  // wordname->id
  // id->word
  query.equalTo('wordname','hello');
  query.find().then((result)=>{
    // wordId = result.objectId;
    // let word = AV.Object.extend('Word');

    // word.set('objectId',wordId);

    let word= result;
    // res.json(result)
    video.set('url',url);
    // video.set('user',req.currentUser);
    video.set('user',user);
    // video.set('word',word);//Pointer类型
    video.set('likeCount',likeCount);
    video.set('dislikeCount',dislikeCount);
    video.set('views',views);

  })
  video.save().then((video)=>{
    res.json("add success!");
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
