import React from 'react'

import { Child1 } from '../../components/index'

export default class TestProps extends React.Component{
    //子类构造器
    constructor(props){
        //调用父类的构造器
        super(props)
        //这里声明的变量一旦发生变化，视图自动更新(单相绑定)
        this.state = {
            msg:'hello React'
        }
    }
    //自定义方法
    changeMsg(){
        let num = Math.random()
        //用于改变state的,在方法是异步的
        //setState()可以接受第二个参数，是一个函数，表示当前异步任务完成的回调
        this.setState({msg:num},()=>{
            console.log('更新完成')
        })
    }
    render(){
        let { msg } = this.state
        return(
            <div>
                <div>{msg}</div>
                <button onClick={this.changeMsg.bind(this)}>改变</button>
                {/* aaa是静态传值 */}
                <Child1 aaa="aaa">
                    <a href="http://baidu.com">百度</a>
                </Child1>
            </div>
        )
    }
}