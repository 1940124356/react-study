import React from 'react'

import { Checkbox,Radio } from '../../components/'

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
                myAgree:false,
                myGender:'1'
            },
            favArr:[
                {id:1,name:'读书'},
                {id:2,name:'音乐'},
                {id:3,name:'游戏'},
                {id:4,name:'编程'},
                {id:5,name:'吃喝'}
            ],
            favs:[1,2,5],
            eduArr:[
                {id:1,name:'博士'},
                {id:2,name:'硕士'},
                {id:3,name:'本科'},
                {id:4,name:'大专'},
                {id:5,name:'高中'},
            ],
            edu:3
        }
    }
    //提交表单
    submit(){
        let data = {
            name:this.state.name,
            fav:this.state.fav,
            src:this.state.src,

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
        console.log(e.target.value)
        let { info }= this.state
        if(k=== 'myAgree'){
            info[k] = e.target.checked
        }else{
            info[k]=e.target.value
        }
        
        this.setState({info:info})
    }
    submit2(){
        console.log('data',this.state.info,this.state.favArr)
    }
    favChanges(val){
        this.setState({favs:val})
    }
    eduChange(val){
        console.log(val)
        this.setState({edu:parseInt(val)})
    }
    render(){
        let { name,fav,info,favArr,favs,eduArr,edu }=this.state
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
                    <span>性别</span>
                    <input name='gender' value='1' checked={info.myGender==='1'} onChange={this.myChange.bind(this,'myGender')} type="radio"/><span>男</span>
                    <input name='gender' value='2' checked={info.myGender==='2'} onChange={this.myChange.bind(this,'myGender')} type="radio"/><span>女</span>
                </div>
                <div>
                    <input checked={info.myAgree} onChange={this.myChange.bind(this,'myAgree')} type="checkbox"/>
                    <span>你是否同意该协议</span>
                </div>
                <button onClick={this.submit2.bind(this)}></button>
                <Checkbox value={favs} options={favArr} onChange={this.favChanges.bind(this)}></Checkbox>
                <Radio value={edu} options={eduArr} onChange={this.eduChange.bind(this)}></Radio>
            </div>
        )
    }
}