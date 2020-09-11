import React from 'react'


export default class TestDome extends React.Component{
    //子类构造器
    constructor(props){
        //调用父类的构造器
        super(props)
        //这里声明的变量一旦发生变化，视图自动更新(单相绑定)
        this.state = {
            msg:1
        }
    }
    
    render(){
        let { msg } = this.state
        return(
            <div>
                <div>{msg}</div>
                <button onClick={this.setState({msg:msg++})}>改变</button>
            </div>
        )
    }
}