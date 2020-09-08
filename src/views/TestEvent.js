import React from 'react'

export default class TestEvent extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    ClickHandle(e){
        console.log('clicked',e)
        console.log('this',this)
    }
    linkHandle(e){
        //阻止默认事件
        e.preventDefault();
        //阻止冒泡
        e.stopPropagation();
    }
    KeyUPHandle(e){
        console.log('code',e.keyCode)
        if(e.keyCode===13){
            //提交表单
            console.log('提交成功',e.target.value)//获取输入框里的值
        }
    }
    render(){
        return(
            <div>
                <h1>事件测试</h1>
                <div onClick={this.ClickHandle.bind(this,'aaa','id')}>绑定事件</div>
                <div onClick={(e)=>this.ClickHandle('bbb',e,'aaa')}>箭头函数绑事件</div>
                {/* 如何阻止默认事件 */}
                <a href="http://baidu.com" onClick={this.linkHandle.bind(this)}>百度</a>
                {/* 监听键盘事件 */}
                <input type="text" onKeyUp={this.KeyUPHandle.bind(this)}/>
            </div>
        )
    }
}