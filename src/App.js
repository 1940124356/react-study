import React from 'react';
import './App.min.css';

import TestJsx from './views/TestJsx'

import TestProps from './views/TestProps'
import TestEvent from './views/TestEvent'
import TestLanguage from './views/TestLanguage';
import TestCondition from './views/TestCondition'
import TestList from './views/TestList'
import TestForm from './views/TestForm'
import TestLife from './views/TestLife'
import TestLift from './views/TestLift'
import TestComposition from './views/TestComposition'
import TestContext from './views/TestContext'
import TestHoc from './views/TestHoc'


// 创建一个 theme Context,
export const {Provider,Consumer} = React.createContext("默认名称");
// export const ThemeCtx = React.createContext()

export default class App extends React.Component{
  render(){
    let name={
      n:'父',
      num:123
    }
    return (
      <Provider value={name}>
        <div>
          <h1>hello React</h1>
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
        </div>
      </Provider>
      
        
    );
  }
  
}
