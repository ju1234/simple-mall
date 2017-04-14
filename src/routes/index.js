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

      {/*首页*/}
      <Route path={paths.INDEX} >
        <IndexRoute getComponent={(location,cb) => {
          require.ensure([], (require) => {
            cb(null, require('../View/Index/Index').default)
          }, 'index')
        }}/>
        {/*订单页*/}

        <Route path='order' getComponent={(location, cb) => {
          require.ensure([], (require) => {
            cb(null, require('../View/Order/Order.jsx').default)
          }, 'order')
        }}/>

        {/*购物车页*/}
        <Route path='cart' getComponent={(location, cb) => {
          require.ensure([], (require) => {
            cb(null, require('../View/Cart/Cart.jsx').default)
          }, 'cart')
        }}/>

        {/*我的主页*/}
        <Route path='my' getComponent={(location, cb) => {
          require.ensure([], (require) => {
            cb(null, require('../View/My/My.jsx').default)
          }, 'my')
        }}/>
      </Route>



    {/*分类详情页*/}
    <Route path={paths.CLASSIFY} getComponent={(location, cb) => {
      require.ensure([], (require) => {
        cb(null, require('../View/Classify/Classify.jsx').default)
      }, 'classify')
    }}/>

    {/*支付页面*/}
    <Route path={paths.PAY} getComponent={(location, cb) => {
      require.ensure([], (require) => {
        cb(null, require('../View/Pay/Pay.jsx').default)
      }, 'pay')
    }}/>




    {/*商品详情页*/}
    <Route path={paths.SYNOPSIS} getComponent={(location, cb) => {
      require.ensure([], (require) => {
        cb(null, require('../View/Synopsis/Synopsis.jsx').default)
      }, 'synopsis')
    }}/>

    {/*搜索页*/}
    <Route path={paths.SEARCH} getComponent={(location, cb) => {
      require.ensure([], (require) => {
        cb(null, require('../View/Search/Search.jsx').default)
      }, 'search')
    }}/>

    {/*收货地址*/}
    <Route path={paths.ADDRESS} getComponent={(location, cb) => {
      require.ensure([], (require) => {
        cb(null, require('../View/Address/Adderss.jsx').default)
      }, 'search')
    }}/>


    {/*登录页*/}
    <Route path={paths.LOGIN} getComponent={(location, cb) => {
      require.ensure([], (require) => {
        cb(null, require('../View/Login/Login.jsx').default)
      }, 'login')
    }}/>


    {/*注册*/}
    <Route path={paths.REGITER} getComponent={(location, cb) => {
      require.ensure([], (require) => {
        cb(null, require('../View/Register/Register.jsx').default)
      }, 'register')
    }}/>
  </Router>
);




export default routes;
