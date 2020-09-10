import React from 'react';
import './App.min.css';



import { Layout } from './components/'
import { HashRouter,BrowserRouter } from 'react-router-dom'

// 创建一个 theme Context(上下文),
export const {Provider,Consumer} = React.createContext("默认名称");
// export const ThemeCtx = React.createContext()

export default class App extends React.Component{
  render(){
    let name={
      n:'父',
      num:123
    }
    return (
      <HashRouter>
        <Provider value={name}>
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
        </Provider>
      </HashRouter>
      
      
        
    );
  }
  
}
