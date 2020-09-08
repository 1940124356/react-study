import React from 'react'

export default class TestLife extends React.Component{
    // 挂载阶段
    constructor(props){     //一、
        super(props)
        console.log('constructor')
        this.state={
            count:1
        }
    }
    componentDidMount(){    //二、
        console.log('componentDidMount')
    }

    // 更新阶段
    //开关：控制视图是否更新
    //用于性能优化
    countChange(){  //自定义事件
        this.setState((prevState)=>({
            count:prevState.count+1 
        }))
    }
    shouldComponentUpdate(){    //一、
        console.log('shouldComponentUpdate')
        return true
    }
    componentDidUpdate(){       //二、
        console.log('componentDidUpdate')
    }

    // 销毁阶段
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    //所有生命周期中，不能少
    //组件初始化，组件更新，都会触发
    render(){               //三、
        console.log('render')
        return(
            <div>
                <h1>生命周期</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.countChange.bind(this)}>加</button>
            </div>
        )
    }
}