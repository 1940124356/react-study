import React from 'react'

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    change(e){
        this.props.onChange(e.target.value)
    }
    createOptions(){
        let { options,value }=this.props
        return options.map(ele=>(
            <span key={ele.id}>
                <input value={ele.id} onChange={this.change.bind(this)} checked={value===ele.id} type="radio"/><span>{ele.name}</span>
            </span>
        ))
    }
    render(){
        return (
            <div className="radio">
                <h1>Radio</h1>
                {this.createOptions()}
            </div>
        )
    }
}