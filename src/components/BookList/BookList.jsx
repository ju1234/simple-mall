/**
 * 文件说明： BookList
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.3
 */

import React, {Component} from 'react';
import bookListStyle from './scss/bookList.scss';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//=========================================================
import BookIntro from '../BookIntro/BookIntro'
//=========================================================
import {getBooks} from '../../redux/actions/bookListAction.js'
import axios from 'axios'

// var axios = require('axios');

class BookList extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({}, {
      getBooks
    }), props.dispatch)
  }

  componentDidMount() {
    axios.get('http://192.168.0.112:8888/api/book').then((res) => {
      // console.log(this)
      this.actions.getBooks(res.data.books)
    });
  }

  render() {
    console.log(this.props.bookList);

    var content = this.props.bookList ? this.props.bookList.map((book,key) => {
        return <BookIntro {...book} key={key}/>
      }) : null;
    return (

      <div className={bookListStyle.bookList}>
        {content}
      </div>
    )
  }
}


function mapStateToProps(store) {
  return {
    bookList: store.bookList
  }
}


export default connect(mapStateToProps)(BookList);
module.exports = connect(mapStateToProps)(BookList);
