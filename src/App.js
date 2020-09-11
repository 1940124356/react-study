import React from 'react';
import './assets/css/App.scss';
import 'antd/dist/antd.css'; 



import { Layout } from './components/'
import { HashRouter } from 'react-router-dom'

//状态管理
import { Provider } from 'mobx-react'
import store from './store/'

// 创建一个 theme Context(上下文),
import ThemeCtx from './utils/theme'
// export const {Provider,Consumer} = React.createContext("默认名称");
// export const ThemeCtx = React.createContext()

export default class App extends React.Component{
  render(){
    let name={
      n:'父',
      num:123
    }
    return (
      
        <HashRouter>
          <Provider store={store}>
          <ThemeCtx.Provider value={name}>
            <Layout></Layout>
              {/* <h1>hello React</h1>
              <TestJsx></TestJsx>
              <TestProps></TestProps>
              <TestEvent></TestEvent>
              <TestLanguage></TestLanguage>
              <TestCondition></TestCondition>
              <TestList></TestList>
              <TestForm></TestForm>
              <TestLife></TestLife>
              <TestLift></TestLift>
              <TestComposition></TestComposition>
              <TestContext></TestContext>
              <TestHoc></TestHoc>
              <TestHooks></TestHooks> */}
          </ThemeCtx.Provider>
          </Provider>
        </HashRouter>
      
        
    );
  }
  
}
