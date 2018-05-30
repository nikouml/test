import React from 'react'
import {Row, Col,Icon} from 'antd'
import axios from 'axios'
import './index.css'
class modelHomePage extends React.Component {
  constructor () {
    super()
    this.state = {
      true_name: ''
    }
  }
  componentDidMount () {
    const token = localStorage.token, url = 'http://192.168.1.5:3000/user'
    const config = {
      method: 'get',
      url: url,
      headers: {'Content-Type': 'application/json', 'token': token}
    }
    axios(config)
      .then(res => {
        console.log(res)
        const trueName = res.data.userInfo.true_name
        this.setState({
          true_name: trueName
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render () {
    const url = 'url("http://p53vmqr8d.bkt.clouddn.com/0.png")'
    let urls = []
    for (let i = 1; i <= 12; i++) {
      urls.push('src/images/homePageIcon/' + i + '.png')
    }
    // const urls=['src/images/homePageIcon/1.png']
    return (
      <div className='back' style={{backgroundImage: url}}>
        <div className='title'>
          <span className='titleText titleLeft'>秦皇岛物业行政监管平台</span>
          <span className='titleText titleRight'><Icon type="user" /> {this.state.true_name} <a><Icon type="down" /></a></span>
        </div>
        <div className='modelsLeft' style={{width: '70%'}}>
          <div className='models1' >
            <Row>
              <Col className='fangkuai' span={6} >
                <a className='pics'>
                  <img src={urls[0]} alt='' /><br />
                  <div className='picsText'>物业管理</div>
                </a>
              </Col>
              <Col className='fangkuai' span={6} ><a className='pics'><img src={urls[1]} alt='' /><br /><div className='picsText'>地图查询</div></a></Col>
              <Col className='fangkuai' span={6}><a className='pics'><img src={urls[2]} alt='' /><br /><div className='picsText'>督查督办</div></a></Col>
              <Col className='fangkuai' span={6} ><a className='pics'><img src={urls[3]} alt='' /><br /><div className='picsText'>巡查考评</div></a></Col>
            </Row>
          </div>
          <div className='models2' >
            <Row>
              <Col className='fangkuai' span={6} ><a className='pics'><img src={urls[4]} alt='' /><br /><div className='picsText'>风险管理</div></a></Col>
              <Col className='fangkuai' span={6} ><a className='pics'><img src={urls[5]} alt='' /><br /><div className='picsText'>信用评级</div></a></Col>
              <Col className='fangkuai' span={6}><a className='pics'><img src={urls[6]} alt='' /><br /><div className='picsText'>数据分析</div></a></Col>
              <Col className='fangkuai' span={6} ><a className='pics'><img src={urls[7]} alt='' /><br /><div className='picsText'>老旧小区</div></a></Col>
            </Row>
          </div>
          <div className='models3' >
            <Row>
              <Col className='fangkuai' span={6} ><a className='pics'><img src={urls[8]} alt='' /><br /><div className='picsText'>公共维修基金</div></a></Col>
              <Col className='fangkuai' span={6} ><a className='pics'><img src={urls[9]} alt='' /><br /><div className='picsText' style={{marginTop:'25px'}}>招投标管理</div></a></Col>
              <Col className='fangkuai' span={6}><a className='pics'><img src={urls[10]} alt='' /><br /><div className='picsText'>代办提醒</div></a></Col>
              <Col className='fangkuai' span={6} ><a className='pics'><img src={urls[11]} alt='' /><br /><div className='picsText'>系统管理</div></a></Col>
            </Row>
          </div>
        </div>
        <div className='modelsRight' >
          <div className='boxRight boxRight1'>
            <span style={{fontSize: '22px'}}>管理员，你好！</span>
            <br />
            <span>欢迎登录秦皇岛物业管理信息系统</span>

            <br /><br />
            <span>
              上次登录时间为： <br />
            2015年7月28日 10:12:66 <br />
            这是您第67次登录
            </span>

          </div>
          <div className='boxRight boxRight2'>
            <Row>
              <Col span={12}><span>代办事宜（0） </span></Col>
              <Col span={12}><span>提示信息（12）</span></Col>
            </Row>
          </div>

          <div  className='boxRight boxRight3'>
            {/*<Calendar fullscreen={false} />*/}
          </div>
        </div>

      </div>
    )
  }
}

export default modelHomePage
