/**
 * Created by out_xu on 17/7/13.
 */
import React from 'react'
import './index.less'
// import path, {namesMap} from 'routerForm/index'
// const {HomePage, AsyncPage, HomePage2} = namesMap

const LayoutContent = (props) => (
  <div className='App'>
    <div className='App-side' />
    <div className='App-content'>
      {props.children}
    </div>
  </div>
)

export default LayoutContent
