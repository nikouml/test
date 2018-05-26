import {Component} from 'react'
import SearchHeader from '../../components/Search/index'
import './index.less'

export default class SearchPage extends Component {
  render () {
    return (
      <div className='searchPage'>
        <SearchHeader />
      </div>
    )
  }
}
