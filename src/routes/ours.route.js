/**
 * Created by jufei on 2017/3/20.
 */

module.exports = {
  path: 'ours',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/ours.jsx').default)
    }, 'ours')
    // import('../components/ours.jsx')
    //   .then(module => {
    //     cb(null,module.default)
    //   })
  }
};
