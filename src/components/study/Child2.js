import React from 'react'

export default class TestLanguage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[
                {id:1,name:'中文'},
                {id:2,name:'英文'},
                {id:3,name:'法语'},
                {id:4,name:'俄罗斯语'},
            ]
        }
    }
    //点击传id
    langChange(id){
        //使用父组件传过来的事件把id传过去
        this.props.onXXX(id)
    }
    //渲染span
    createList(){
        let { list } = this.state
        let { lang } = this.props
        return list.map(ele=>(
            <span 
            key={ele.id}
            className={lang===ele.id ? 'on' : ''}
            onClick={this.langChange.bind(this,ele.id)}
            >
                {ele.name}
            </span>
        ))
    }
    render(){
        return(
            <div className="language">
                {this.createList()}
            </div>
        )
    }
}