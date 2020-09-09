import React from 'react'

export default class Checkbox extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    //创建check-input
    createOptions(){
        let { options,value } = this.props
        let arr = []
        options.map(ele=>{
            if(value.includes(ele.id)){
                ele.checked=true
            }else{
                ele.checked=false
            }
            arr.push(
                <span key={ele.id}>
                    <input 
                    value={ele.id} 
                    checked={ele.checked} 
                    type="checkbox"
                    onChange={this.Change.bind(this)}
                    />
                    <span>{ele.name}</span>
                </span>
            )
            return null
        })
        return arr
    }
    //点击选择框触发
    Change(e){
        let { value } = this.props
        // 如果选中就push进去
        if(e.target.checked){
            value.push(parseInt(e.target.value))
        }else{
        // 如果未选中就删除
            value=value.filter(ele=>ele!==parseInt(e.target.value))
        }
        this.props.onChange(value)
    }
    render(){
        return (
            <div className="checkbox">
                {this.createOptions()}
            </div>
        )
    }
}