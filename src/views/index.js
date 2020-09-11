import loadable from '@loadable/component'
// import Testdome from './study/Testdome'

// import TestJsx from './study/TestJsx'

// import TestProps from './study/TestProps'
// import TestEvent from './study/TestEvent'
// import TestLanguage from './study/TestLanguage';
// import TestCondition from './study/TestCondition'
// import TestList from './study/TestList'
// import TestForm from './study/TestForm'
// import TestLife from './study/TestLife'
// import TestLift from './study/TestLift'
// import TestComposition from './study/TestComposition'
// import TestContext from './study/TestContext'
// import TestHoc from './study/TestHoc'
// import TestHooks from './study/TestHooks'
const TestJsx = loadable(()=>import('./study/TestJsx'))
const TestProps = loadable(()=>import('./study/TestProps'))
const TestEvent = loadable(()=>import('./study/TestEvent'))
const TestLanguage = loadable(()=>import('./study/TestLanguage'))
const TestCondition = loadable(()=>import('./study/TestCondition'))
const TestList = loadable(()=>import('./study/TestList'))
const TestForm = loadable(()=>import('./study/TestForm'))
const TestLife = loadable(()=>import('./study/TestLife'))
const TestLift = loadable(()=>import('./study/TestLift'))
const TestComposition = loadable(()=>import('./study/TestComposition'))
const TestContext = loadable(()=>import('./study/TestContext'))
const TestHoc = loadable(()=>import('./study/TestHoc'))
const TestHooks = loadable(()=>import('./study/TestHooks'))
const Good = loadable(()=>import('./good/Good'))
const Detail = loadable(()=>import('./good/Detail'))
const TestStore = loadable(()=>import('./good/TestStore'))



const routes = [
    {id:1,path:'/jsx',component:TestJsx,text:'测试Jsx',icon:''},
    {id:2,path:'/props',component:TestProps,text:'测试props传值',icon:''},
    {id:3,path:'/event',component:TestEvent,text:'测试事件绑定',icon:''},
    {id:4,path:'/language',component:TestLanguage,text:'测试语言选择',icon:''},
    {id:5,path:'/condition',component:TestCondition,text:'测试条件渲染',icon:''},
    {id:6,path:'/list',component:TestList,text:'测试列表渲染',icon:''},
    {id:7,path:'/form',component:TestForm,text:'测试表单绑定',icon:''},
    {id:8,path:'/life',component:TestLife,text:'测试life生命周期',icon:''},
    {id:9,path:'/lift',component:TestLift,text:'测试lift状态提升',icon:''},
    {id:10,path:'/composition',component:TestComposition,text:'测试组合模式',icon:''},
    {id:11,path:'/context',component:TestContext,text:'测试上下文',icon:''},
    {id:12,path:'/hoc',component:TestHoc,text:'高阶组件',icon:''},
    {id:13,path:'/hooks',component:TestHooks,text:'测试hooks',icon:''},
    {
        id:14,
        path:'/good',
        component:Good,
        text:'商品列表',
        icon:'',
        children:[
            {id:1401,path:'/good/detail/:id/:name',component:Detail,text:'商品详情页面',icon:''}
        ]   
    },
    {id:15,path:'/testStore',component:TestStore,text:'TodoList'}
    
]

export default routes