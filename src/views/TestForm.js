import React from 'react'

export default class TestForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'abc',
            fav:'1',
            src:'',
            info:{
                myName:'',
                myPass:'',
                myPhone:'',
                myFav:'1',
                myAgree:false
            }
        }
    }
    //提交表单
    submit(){
        let data = {
            name:this.state.name,
            fav:this.state.fav,
            src:this.state.src
        }
        console.log('提交成功',data)
    }
    //input框
    nameChange(e){
        this.setState({name:e.target.value})
        console.log(e.target.value)
    }
    //下拉菜单
    favChange(e){
        this.setState({fav:e.target.value})
    }

    // ----------------------------------------------------------------
    myChange(k,e){
        let { info }= this.state
        if(k=== 'myAgree'){
            info[k] = e.target.checked
        }else{
            info[k]=e.target.value
        }
        
        this.setState({info:info})
    }
    submit2(){
        console.log('data',this.state.info)
    }
    render(){
        let { name,fav,info }=this.state
        return(
            <div>
                <h1>测试表单</h1>

                <input type="text" onChange={this.nameChange.bind(this)} value={name}/>
                <input type="file"/>
                <select value={fav} onChange={this.favChange.bind(this)}>
                    <option value="1">音乐</option>
                    <option value="2">跑步</option>
                    <option value="3">读书</option>
                    <option value="4">游戏</option>
                </select>
                <button onClick={this.submit.bind(this)}>提交</button>

                {/* {==========================================================================} */}
                <div>
                    <span>用户名</span>
                    <input value={info.myName} onChange={this.myChange.bind(this,'myName')} type="text"/>
                </div>
                <div>
                    <span>密码</span>
                    <input value={info.myPass} onChange={this.myChange.bind(this,'myPass')} type="text"/>
                </div>
                <div>
                    <span>手机</span>
                    <input value={info.myPhone} onChange={this.myChange.bind(this,'myPhone')} type="text"/>
                </div>
                <select value={info.myFav} onChange={this.myChange.bind(this,'myFav')}>
                    <option value="1">音乐</option>
                    <option value="2">跑步</option>
                    <option value="3">读书</option>
                    <option value="4">游戏</option>
                </select>
                <div>
                    <input checked={info.myAgree} onChange={this.myChange.bind(this,'myAgree')} type="checkbox"/>
                    <span>你是否同意该协议</span>
                </div>
                <button onClick={this.submit2.bind(this)}></button>
            </div>
        )
    }
}