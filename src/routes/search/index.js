import {Component} from 'react'
import {Button} from 'antd'
import SearchHeader from '../../components/Search/index'
import SearchConfig from './config/search.config'
import MyTable from '../../components/MyTable'
import TableConfig from './config/table.config'
import './index.less'

export default class SearchPage extends Component {
  render () {
    return (
      <div className='searchPage'>
        <SearchHeader config={SearchConfig} />
        <div className='searchPage-middle'>
          <Button>新增</Button>
        </div>
        <MyTable config={TableConfig} />
      </div>
    )
  }
}
