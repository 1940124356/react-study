import React from 'react'

import { Lift1,Lift2 } from '../components/' 
export default class TestLift extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <h1>测试状态提升</h1>
                <Lift1></Lift1>
                <Lift2></Lift2>
            </div>
        )
    }
} 