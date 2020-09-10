import React from 'react'

import { Child2 } from '../../components/index'

export default class TestLanguage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            lang:1
        }
    }
    langChange(id){
        console.log('父',id)
        this.setState({lang:id})
    }
    render(){
        let { lang }=this.state
        return(
            <div>
                <h1>TestLanguage</h1>
                <Child2 lang={ lang } onXXX={this.langChange.bind(this)}></Child2>
            </div>
        )
    }
}