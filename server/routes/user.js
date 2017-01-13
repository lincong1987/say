'use strict';

var userController = require('../controllers/user')

module.exports = router => {
  router.route('/user/login')
    .post(userController.login)

  router.route('/users')
    .post(userController.register)
}
