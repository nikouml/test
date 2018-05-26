import {Component} from 'react'
import {Form, Input, Button} from 'antd'
import {withRouter} from 'dva/router'
import './index.less'

class SearchHeader extends Component {
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    return (
      <div className='searchHeader'>
      </div>
    )
  }
}

export default withRouter(SearchHeader)
