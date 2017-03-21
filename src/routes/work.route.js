/**
 * Created by jufei on 2017/3/20.
 */

module.exports = {
  path: 'work',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/work.jsx'))
    }, 'work')
  }
};
