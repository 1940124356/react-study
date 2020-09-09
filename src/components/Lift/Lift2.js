import React from 'react'

export default class TestLift extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg:''
        }
    }
    onChange(e){
        this.setState({msg:e.target.value})
    }
    render(){
        let { msg } = this.state
        return(
            <div>
                <h1>我是liftB组件</h1>
                <input value={msg} onChange={this.onChange.bind(this)} type="text"/>
            </div>
        )
    }
} 