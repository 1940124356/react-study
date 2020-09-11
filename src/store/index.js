import CountStore from './modules/CountStore'
import TodoStore from './modules/TodoStore'

class Store{
    //类的构造器
    constructor(){
        // 实例化
        this.CountStore = new CountStore()
        this.TodoStore = new TodoStore()
        // this.GoodStore = new GoodStore()
        // this.OrderStore = new OrderStore()
    }
}

export default new Store()