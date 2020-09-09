import React from 'react'
import hoc from '../utils/hoc'

class TestHoc extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div>
                <h1>测试HOC</h1>
            </div>
        )
    }
}

export default hoc(TestHoc)