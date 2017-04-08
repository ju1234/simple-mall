/**
 * 文件说明： router
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import paths from '../config/routePaths.js';


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
    <Route path={paths.INDEX} getComponent={(location, cb) => {
      require.ensure([], (require) => {
        cb(null, require('../View/Index/Index').default)
      }, 'index')
    }}/>
    <Route path={paths.CLASSIFY} getComponent={(location, cb) => {
      require.ensure([], (require) => {
        cb(null, require('../View/Classify/Classify.js').default)
      }, 'classify')
    }}/>
    <Route path={paths.SYNOPSIS} getComponent={(location, cb) => {
      require.ensure([], (require) => {
        cb(null, require('../View/Synopsis/Synopsis.js').default)
      }, 'synopsis')
    }}/>
    <Route path={paths.SEARCH} getComponent={(location, cb) => {
      require.ensure([], (require) => {
        cb(null, require('../View/Search/Search.js').default)
      }, 'search')
    }}/>
  </Router>
);




export default routes;
