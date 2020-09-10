import React from 'react'

export default class TestList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[
                {id:1,name:'one'},
                {id:2,name:'two'},
                {id:3,name:'three'},
                {id:4,name:'four'},
                {id:5,name:'five'},
            ]
        }
    }
    render(){
        let { list }=this.state
        return(
            <div>
                <h1>测试列表渲染</h1>
                { list.map(ele=>(
                    <div key={ele.id}>
                        <span>{ele.id}</span>
                        <span>---</span>
                        <span>{ele.name}</span>
                    </div>
                )) }
            </div>
        )
    }
}