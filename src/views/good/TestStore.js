import React from 'react'
import { inject,observer } from 'mobx-react'

@inject('store')
@observer
class TestStore extends React.Component {
    constructor(props){
        super(props)
        this.state={
            arr:[],
            task:''
        }
    }
    taskChange(arg,e){
        let { TodoStore } = this.props.store
        if(arg==='add'){
            this.setState({task:e.target.value})
        }else{
            TodoStore.updTodo({idx:arg,task:e.target.value})
        }
    }
    add(e){
        // console.log(e.keyCode)
        if(e.keyCode===13){
            let { TodoStore } = this.props.store
            TodoStore.addTodo({id:Date.now(),task:this.state.task})
            this.setState({task:''})
        }
        
    }
    remove(idx){
        let { TodoStore } = this.props.store
        TodoStore.delTodo(idx)
    }
    createTodoList(){
        let { TodoStore } = this.props.store
        return TodoStore.list.map((ele,idx)=>(
            <div key={ele.id}>
                <span>-----</span>
                <input value={ele.task} onChange={this.taskChange.bind(this,idx)} type="text"/>
                <button onClick={this.remove.bind(this,idx)}>删除</button>
            </div>
        ))
    }
    render(){
        // console.log('props',this.props.store)
        let { task } = this.state
        let { TodoStore } = this.props.store
        return(
            <div>
                <h1>测试TodoList</h1>
                <span>{TodoStore.total}</span>
                {this.createTodoList()}
                <div>
                    <input value={task} onChange={this.taskChange.bind(this,'add')} onKeyUp={this.add.bind(this)} type="text"/>
                </div>
            </div>
        )
    }
}

export default TestStore