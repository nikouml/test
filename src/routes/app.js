import React from 'react'
import { Redirect, Route, Switch } from 'dva/router'
import Homepage from './home'
import NotFound from './404'
import dynamic from 'dva/dynamic'
import Layout from 'components/Layout'
import DemoPage from './demo/index'
import Login from './Login/index'
import Forget from './Login/forget/index'
import Register from './Login/register/index'
import SearchPage from './search'
import HomeModel from './modelHomePage/index'
import path, { namesMap } from 'routerForm'

const {HomePage, AsyncPage, Page404} = namesMap

const App = (props) => {
  const AsyncDemo = dynamic({component: () => System.import('./asyncDemo')})
  return (
    <Switch>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route path='/forget' component={Forget} />
        <Route path='/register' component={Register} />
        <Route path='/model' component={HomeModel} />
        <Redirect from='*' to='/404' />
      </Switch>
      <Layout>
        <Switch>
          <Route path='/home' component={Homepage} />
          <Route path='/demo' component={DemoPage} />
          <Route path='/search' component={SearchPage} />
          <Route path={path(AsyncPage)} component={AsyncDemo} />
          <Route path={path(Page404)} component={NotFound} />
          <Redirect from='*' to='/404' />
        </Switch>
      </Layout>
    </Switch>
  )
}

export default App
