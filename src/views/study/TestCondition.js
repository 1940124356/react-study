import React from 'react'

export default class TestCondition extends React.Component{
    constructor(props){
        super(props)
        this.state={
            boll:true,
            boll2:false
        }
    }
    createView(){
        let { boll3 }=this.state
        let ele = null
        switch (boll3) {
            case 1:
                ele=<div>4444444</div>
            break;

            case 2:
                ele=<div>555555</div>
            break;

            case 3:
                ele=<div>666666666</div>
            break;

            case 4:
                ele=<div>7777777777</div>
            break;

            case 5:
                ele=<div>888888888</div>
            break;
        
            default:
                ele = <div>99999999</div>
            break;
        }
        return ele
    }
    render(){
        let { boll,boll2 }=this.state
        return(
            <div>
                <h1>测试条件渲染</h1>
                { boll && <h2>123456</h2> }
                <hr/>
                {boll2 ? <h2>222222</h2> : <h2>333333333</h2>}
                {this.createView()}
                <div style={{display:'block'}}>789456123</div>
            </div>
        )
    }
}