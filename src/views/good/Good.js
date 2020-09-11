import React from 'react'
import { Button } from 'antd';

//使用状态管理中的数据
import { inject,observer } from 'mobx-react'

// inject 注入，作用是吧某一个或多个store中的数据注入到组件中去
// observer 观察者，当被观察的被共享的store数据发生变化，本组件自动更新

@inject('store')
@observer
class Good extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[
                {id:1,name:'手机'},
                {id:2,name:'食品'},
                {id:3,name:'衣服'},
                {id:4,name:'家具'},
            ]
            
        }
    }
    skipToDetail(ele){
        console.log('ele',ele)
        this.props.history.push('/good/detail/'+ele.id+'/'+ele.name)
    }
    createGoodList(){
        let { list } = this.state
        return list.map(ele=>(
            <div key={ele.id} onClick={this.skipToDetail.bind(this,ele)}>
                <span>{ele.id}</span>
                <span>-----</span>
                <span>{ele.name}</span>
            </div>
        ))
    }
    render(){
        console.log('props',this.props)
        //取状态管理共享过来的值
        let { CountStore } = this.props.store
        return(
            <div>
                <h1>商品列表</h1>
                <h3>{CountStore.count}</h3>
                <Button type="primary">Primary Button</Button>
                {this.createGoodList()}
            </div>
        )
    }
}

export default Good