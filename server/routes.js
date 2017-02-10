/**
 * Created by jhh on 2017/1/19.
 */

const usersRouter = require('./controllers/users')
const wordsRouter = require('./controllers/words')
// import usersRouter from './controllers/users'

module.exports = app =>{
  app.post('/api/users/signup',usersRouter.post.signup);
  app.post('/api/users/login',usersRouter.post.login);

  app.get('/api/words',wordsRouter.get.getAllWords);
  app.post('/api/words',wordsRouter.post.addWord);
  app.delete('/api/words/:id',wordsRouter.delete.deleteWord);


};
