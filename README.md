# 初识JSX
    谈谈你对JSX的理解？
        如何理解JSX?
        jsx就是一个变量
        jsx也是一个对象
        jsx中可以使用静态属性
        jsx中还可以使用动态属性
        jsx本身就是表达式，它的内部还可以使用表达式(用大括号包裹)
        jsx可以任意嵌套

# 组件的定义
    类组件(class)
        export default class TestProps extends React.Component{}定义的组件
        有状态state、有声明周期
    函数组件(无状态组件)
        它没有状态(state)
        它没有生命周期,不能使用render
        它也没有this
        它唯一的好处就是性能好，这是react性能优化的方式之一
        ```
        export default function(props){
            return(
                <div>
                    <h2>Child1</h2>
                </div>
            )
        }
        ```
    ES5组件

    Hooks组件

    高阶组件
# state与props
### this.state可以理解为vue里面的data，用于存放声明式变量的地方
    ```
    //子类构造器
    constructor(props){
        //调用父类的构造器
        super(props)
        //这里声明的变量一旦发生变化，视图自动更新(单相绑定)
        this.state = {
            msg:'hello React'
        }
    }
    //自定义方法
    changeMsg(){
        let num = Math.random()
        //用于改变state的,在方法是异步的
        //setState()可以接受第二个参数，是一个函数，表示当前异步任务完成的回调
        this.setState({msg:num},()=>{
            console.log('更新完成')
        })
    }
    ```
### props
    props是父子之间的纽带
    props是只读的，不能改
    props不能赋值给state，props和state没有必然关系


# 事件绑定
### 事件绑定的三种方式
        1、bind()   方式绑定:     <div onClick={this.ClickHandle.bind(this)}>bind绑定事件</div>            
        2、箭头函数  方式绑定:     <div onClick={()=>this.ClickHandle()}>箭头函数绑事件</div>

### 如何拿到事件对象
        1、bind()   方法绑定时:     事件对象就是对事件函数的最后一个参数
        2、箭头函数  方法绑定时:    要手动传递事件对象 {(e)=>this.ClickHandle(e)}

### 如何阻止默认事件&&阻止冒泡
    ```
        linkHandle(e){
            //阻止默认事件
            e.preventDefault();
            //阻止冒泡
            e.stopPropagation();
        }
        <a href="http://baidu.com" onClick={this.linkHandle.bind(this)}>百度</a>
    ```
### 如何获取键盘事件
    ```
    KeyUPHandle(e){
        console.log('code',e.keyCode)
        if(e.keyCode==13){
            //提交表单
            console.log('提交成功',e.target.value)//获取输入框里的值
        }
    }

    {/* 监听键盘事件 */}
    <input type="text" onKeyUp={this.KeyUPHandle.bind(this)}/>
    ```
### 如何传参
    事件如何传参?
    bind()方式绑定， this.clickHandle. bind(this ,'arg1' ,'arg2' )
    箭头函数方式绑定，(e)=>this.clickHandle( 'arg1', e, 'arg2')

# 父子组件通信
    父传子使用props
    子传父使用自定义事件
    ```
    {/* lang是自定义属性，子组件通过this.props.lang 来取值*/}
    {/* onChange是自定事件，子组件通过this.props.onChange('arg')来触发，向父组件传值*/}
    <Child2 lang= {lang} onChange= { this. langHandle.bind(this)} />
    ```

# 条件渲染
    意思就是在特定的条件下才会被显示，渲染出来的视图
    比如vue中的 v-show  v-if

    1、&&
    2、三元表达式
    3、switch
    4、display
    ```
        <h1>测试条件渲染</h1>
        { boll && <h2>123456</h2> }
        <hr/>
        {boll2 ? <h2>222222</h2> : <h2>333333333</h2>}
        {this.createView()}
        <div style={{display:'block'}}>789456123</div>
    ```

# 列表渲染
    map()   箭头函数
    ```
    (ele,idx,abc)=>{
        //语句
        ele.checked = true
        return ele
    }
    (ele, idx, abc)=>(ele)

    //如果被渲染的数组需要做一定数据处理，建议封装方法来实现
    //如果被渲染的数组比较简单，可以直接在render的return中写
    ```

# 表单绑定
    表单使用
    value和onChange必须配合使用，那么这种表单就是受控表单

    受控表单是单向绑定的
    受控表单指的是，表单的value值由state来决定和控制

    非受控表单，指的是它的value不受state控制
    React强烈建议，不要使用非受控表单(除文件上传表单外)
    ```
    <input type="file"/>
    ```
# 状态提升
    状态提升，实际上解决是组件之间的数据通信问题
    状态是最原始的数据共享解决方案，在react 延生还没有成熟的状态管理工具。

    prop-types组件的props类型检查
    ```
        cnpm install prop-types -S

        import PropTypes from 'prop-types'

        class XX extends React.Component {}

        Xx. propTypes = {
            msg: PropTypes.string.isRequired, 
            onChange: PropTypes.func.isRequired
        }
    ```
# 组合
    在react实践开发，官方建议使用组合进行组件复用，而不是继承
    props是父子组件之间沟通纽带
    在组合实现组件复用时，props传递的是jsx对象或者是自定义组件

# Context 上下文

作用:   解决层级较深的间接父子组件之间的数据传递问题，以避免繁琐的props传递

使用步骤：

    ```
    1、创建上下文
    import React from 'react'

    2、创建一个 theme Context,
    export const {Provider,Consumer} = React.createContext("默认名称");
    或者 export default const Ctx = React.createContext({});

    3、在App组件中
    import { Provider,Consumer } from '@/utils/Ctx.js'
    或者 import Ctx from '@/utils/Ctx.js'

    4、在App组件中
    return( 
        <Provider value={传值}>
            <子组件></子组件>
        </Provider>
    )

    或者 return( 
        <Ctx.Provider value={传值}>
            <子组件></子组件>   
        </Ctx.Provider>
    )

    5、在子组件中
    import { Consumer } from '../App.js'
    return(
        <Consumer>
            {(value)=>(
                <div>{value}</div>
            )}
        </Consumer>
    )

    或者
    Child3.contextType = Ctx
    <div style={{color: this.context.color, background: this.context.background }}>
    <h3>我的子组件</h3>
    </div>
    ```

# 高阶组件
   高阶组件 :实际上是一个纯函数，该函数的入参是一个组件
   什么是纯函数？唯一的入参，得到唯一的返回值
   高阶组件的作用：把组件中可以复用的业务逻辑抽离出来，便于复用和维护

   高阶组件，也叫高阶函数，还叫容器组件
   被修饰的这个入参组件，被称作是 UI组件

