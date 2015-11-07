// 'use strict';

// var fs = require('fs');
// var router = require('../lib/router');
// var app = require('../app.js');
// var config = require('../config.js');


// var users = [{
//   id: 1,
//   username: 'root'
// }, {
//   id: 2,
//   username: 'vova'
// }, {
//   id: 3,
//   username: 'test'
// }];

// router
//   .get('users', '/users', function * (next) {
//     yield this.render('users/index', {
//       users: users
//     });
//   })
//   .get('users.create', '/users/create', function * (next) {
//     yield this.render('users/create');
//   })
//   .post('/users/create', function * (next) {
//     console.log(this.request.method);
//     console.log('BODY---', this.request.body);
//     console.log('FILES---', this.request.body.files);

//     if (this.request.body.files) {
//       let thumbnail = this.request.body.files.thumbnail;
//       let dir = config.uploadPostThumbnailDir +
//         '\\' + 10;
//       if (!fs.existsSync(dir)) {
//         fs.mkdirSync(dir);
//       }
//       fs.renameSync(thumbnail.path, dir +
//         '\\' + thumbnail.name);
//     }

//     this.status = 201;
//     this.body = this.request.body;
//     // this.redirect(router.url('users.create'));
//   });

// module.exports = router.middleware();