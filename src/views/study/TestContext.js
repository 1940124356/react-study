import React from 'react'

// import { Consumer } from "../../App";//引入父组件的Consumer容器
import ThemeCtx from '../../utils/theme'
// import { Child3 } from '../../components/' 

class TestContext extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    render(){
        // let value = this.context
        console.log('context',this.context)
        return (  
            <div>
                <h1>测试上下文</h1>
                {/* <Child3></Child3> */}
            </div> 
        )
    }
}
TestContext.contextType=ThemeCtx

export default TestContext