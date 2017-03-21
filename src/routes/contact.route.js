/**
 * Created by jufei on 2017/3/20.
 */

module.exports = {
  path: 'contact',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/contact.jsx'))
    }, 'contact')
  }
};



// module.exports = {
//   path: 'contact',
//   getComponent(nextState, cb) {
//     import('../components/contact.jsx')
//       .then( module => {
//         cb(null,module.default)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }
// };
