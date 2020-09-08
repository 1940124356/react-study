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

function App() {
  return (
    <div className="App">
      <h1>hello React</h1>
      <TestJsx></TestJsx>
      <TestProps></TestProps>
      <TestEvent></TestEvent>
      <TestLanguage></TestLanguage>
      <TestCondition></TestCondition>
      <TestList></TestList>
      <TestForm></TestForm>
      <TestLife></TestLife>
    </div>
  );
}

export default App;
