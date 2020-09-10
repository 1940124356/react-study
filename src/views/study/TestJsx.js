//类组件

//函数组件

//ES5组件

//Hooks组件

//高阶组件

import React from 'react'

let ele = <h2 title="jsx">我是一个jsx变量</h2>

export default class TestJsx extends React.Component{
    constructor(props){
        super(props)
        //声明式变量定义的地方
        this.state = {
            msg:'hello msg jsx',
            color:'color'
        }
    }
    createChild(){
        return (
            <div>
                <span>我是一个span</span>
                {ele}
            </div>
        )
    }
    changeColor(){
        this.setState({
            color:'blue'
        })
    }
    render(){
        return(
            <div>
                <h1 className={this.state.color}>测试jsx</h1>
                {ele}
                <div>{this.state.msg}</div>
                <button onClick={this.changeColor.bind(this)}>改变颜色</button>
                <h2>{this.createChild()}</h2>
                <h2 style={{color:'orange',fontSize:'30px'}}>绑定静态的style样式</h2>
            </div>
        )
    }
}