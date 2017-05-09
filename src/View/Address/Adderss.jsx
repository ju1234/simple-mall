/**
 * 文件说明： 收货地址 页面
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.12
 */


import React, {Component} from 'react';
import {Link} from 'react-router';
//===============================================
import Header from '../../components/Header/Header.jsx';
import Container from '../../components/Container/Container.jsx';
//===============================================
import addressStyle from './scss/address.scss';

class Adderss extends Component {


  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentDidMount(){
    document.title = '收货地址';
  }


  state = {
    a: true,
    b: true,
    c: true,
    address: []
  };

  addAddress(){
    if(this.add.value !== ''){
      this.setState({
        address: [...this.state.address,this.add.value]
      });
      this.add.value = '';
    }
  }

  remove(index){
    const newAddress = this.state.address.splice(index,1);
    console.log(newAddress);
    this.setState({
      address: newAddress
    })
  }

  render() {
    return (
      <div>
        <Header>
          <button onClick={() => {
            this.context.router.goBack()
          }}></button>
          <h3>收货地址</h3>
          <button></button>
        </Header>
        <Container bottom={false}>
          <div className={addressStyle.address}>
            <p style={{display: this.state.a ? 'block' : 'none'}}>上海 闵行 莘松路1122 <button onClick={() => {
              this.setState(() => {
                return {
                  a: false
                }
              })
            }}>删除</button></p>
            <p style={{display: this.state.b ? 'block' : 'none'}}>黄山 祁门 新兴路1100 <button onClick={() => {
              this.setState(() => {
                return {
                  b: false
                }
              })
            }}>删除</button></p>
            <p style={{display: this.state.c ? 'block' : 'none'}}>淮北 烈山 陀河东路8号 <button onClick={() => {
              this.setState(() => {
                return {
                  c: false
                }
              })
            }}>删除</button></p>
            {
              this.state.address.map( (item,index) => {
                return <p>{item}<button
                  onClick={this.remove.bind(this,index)}
                >删除</button></p>
              })
            }
            <input type="text" placeholder="新增收货地址" className="input" ref={add => this.add = add}/>
            <p onClick={this.addAddress.bind(this)}>新增收货地址</p>
          </div>
        </Container>
      </div>
    )
  }
}


export default Adderss;
