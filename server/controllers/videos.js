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

router.get.getVideosNew = (req, res)=>{

  let selectVideo = new AV.Query('Video');
  let selectWord = new AV.Query('Word');
  let words = [];

  selectVideo.find().then((results)=> {


    console.log(results);

    results.forEach(function (result, i) {

      var Abc = AV.Object.extend("Word");
      var word = new Abc();

      console.log("result.get('word').id", result.get('word').id);
      console.log(word);
      word.set("id", result.get('word').id);

      words.push(word);
    });



    return AV.Object.fetchAll(words);
  })
    .then(function (words) {


      res.json(words);

  })
.catch(function (e) {
    console.log(e);
    res.json(e.res);
  });

};


router.get.getVideosNew1 = (req,res)=>{
  let query = new AV.Query('Video');
  let query1 = new AV.Query('Word');
  let wordIds = [];
  let querytimes = 0;
  let videos = [];



  query.addDescending('createdAt');

  query.find().then((results)=> {

    results.forEach(function (n, i) {
      wordIds.push(n.get('word').id);
    });

    res.json(wordIds);

    return new AV.Query('Chapter').get(chapterIds[1]);








    for (let obj of results) {
      // id->word实例->存到results的word属性中
      let wordId = obj.get('word').id;
      query1.get("58aa826c0ce463006b111559").then((word) => {

        let wordname = word.get('wordname');
        let videosCount = word.get('videosCount');
        obj.set('word',
          {
            'wordname': wordname,
            'videosCount': videosCount
          });

        videos.push(obj);
        console.log(obj, i++);

      });
    }

    console.log(videos)


     // res.json(videos);


  }).catch(function(error) {
    // catch 方法写在 Promise 链式的最后，可以捕捉到全部 error
    console.error(error);
  });

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
  let query = new AV.Query("Word");
  // wordname->id,id->word
  // query.equalTo('wordname','hello');
  query.equalTo('wordname',wordname);
  query.first().then((result)=>{
    let wordId = result.id;
    let word = AV.Object.createWithoutData('Word', wordId);
    // let wordObj = {};
    // word.fetch().then(()=>{
    //   wordObj.wordname = word.get('wordname');
    //   wordObj.videosCount = word.get('videosCount');
    // })
    video.set('url',url);
    // console.log(req.currentUser)
    // video.set('user',req.currentUser);
    video.set('user',user);
    video.set('word',word);//Pointer类型
    video.set('likeCount',likeCount);
    video.set('dislikeCount',dislikeCount);
    video.set('views',views);

    video.save().then(()=>{
      // res.json("add success!");
      res.json(video)
    },err=>{
      res.json(err);
    })
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
