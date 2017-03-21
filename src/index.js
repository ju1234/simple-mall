/**
 * 文件说明： 入口文件
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */
import "babel-polyfill";
import React from 'react';
import {render} from  'react-dom';

import routes from './routes';




import Sider from './components/MenuList/MenuList.jsx'

// render(<Sider/>,document.getElementById('root'));
render(routes,document.getElementById('root'));
