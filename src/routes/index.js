/**
 * 文件说明： router
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';


// const rootRoute = {
//   path: '/',
//   getComponent(nextState, cb) {
//     require.ensure([], (require) => {
//       cb(null, require('../components/Layout/Layout').default)
//     }, 'index')
//     // import('../components/Skeleton/Skeleton')
//     //   .then( module => {
//     //     cb(null,module.default);
//     //   })
//   },
//   // getComponent(nextState, cb) {
//   //   require.ensure([], (require) => {
//   //     cb(null, require('../components/Layout/Layout').default)
//   //   }, 'index')
//   //   // import('../components/Layout/Layout')
//   //   //   .then( module => {
//   //   //     cb(null,module.default);
//   //   //   })
//   // },
//   childRoutes: [
//     // require('./book.route.js'),
//     // require('./test.route.js')
//   ]
// };


const routes = (
  <Router history={browserHistory}>
    <Route path='/' getComponent={(location, cb) => {
      require.ensure([], (require) => {
        cb(null, require('../View/Index/Index').default)
      }, 'index')
    }}>
    </Route>
  </Router>
);

export default routes;
