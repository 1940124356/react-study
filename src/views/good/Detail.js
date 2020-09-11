import React from 'react'

export default class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render(){
        console.log('props',this.props)
        return(
            <div>
                <h1>商品详情页面</h1>
                <div>{this.props.match.params.id}</div>
                <div>{this.props.match.params.name}</div>
            </div>
        )
    }
}