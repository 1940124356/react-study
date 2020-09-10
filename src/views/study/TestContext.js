import React from 'react'

import { Consumer } from "../../App";//引入父组件的Consumer容器
import { Child3 } from '../../components/' 

export default class TestContext extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    render(){
        return (
            <Consumer>
                {(value)=>{
                    console.log( 'value',value)
                    return (
                        <div>
                            <h1>测试上下文{value.n}</h1>
                            <Child3></Child3>
                        </div> 
                    )
                }}
                
            </Consumer>
            
        )
    }
}