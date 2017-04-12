/**
 * 文件说明： 搜索页
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */


import React, {Component} from 'react';
//===============================================
import Header from '../../components/Header/Header.jsx';
import Container from '../../components/Container/Container.jsx';
//===============================================
import searchStyle from './scss/search.scss';


class Search extends Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentDidMount(){
    this.searchInput.focus()
  }

  render() {
    return (
      <div>
        <Header>
          <button onClick={() => {
            this.context.router.push('/');
          }}></button>
          <input type="text" ref={ input => {
            return this.searchInput = input
          }}/>
        </Header>
        <Container bottom="false">
          search
        </Container>
      </div>
    )
  }
}


export default Search;
