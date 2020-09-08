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
