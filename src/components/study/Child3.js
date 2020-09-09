import React from 'react'

import { Consumer } from '../../App'

export default class Child3 extends React.Component{
    render(){
        return (
            <Consumer>
                {(value)=>{
                    console.log("value2",value)
                    return (
                        <div>
                            <h1>我是子组件{value.n}</h1>
                        </div>
                    )
                }}
                
            </Consumer>
            
        )
    }
}
