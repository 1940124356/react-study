import { observable,action,computed } from 'mobx'

export default class TodoList {
    @observable list=[{id:1,task:'吃饭'}]
    //添加方法
    @action addTodo(payload){
        this.list.push(payload)
    }
    //删除方法
    @action delTodo(payload){
        this.list.splice(payload,1)
    }
    //清空方法
    @action clearTodo(payload){
        this.list=[]
    }
    //更新功能
    @action updTodo(payload){
        this.list[payload.idx].task = payload.task
    }
    @computed get total(){
        return this.list.length
    }
}