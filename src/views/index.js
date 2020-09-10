import loadable from '@loadable/component'

const TestJsx = loadable(()=>import('./study/TestJsx'))
// import TestJsx from './study/TestJsx'


import TestProps from './study/TestProps'
import TestEvent from './study/TestEvent'
import TestLanguage from './study/TestLanguage';
import TestCondition from './study/TestCondition'
import TestList from './study/TestList'
import TestForm from './study/TestForm'
import TestLife from './study/TestLife'
import TestLift from './study/TestLift'
import TestComposition from './study/TestComposition'
import TestContext from './study/TestContext'
import TestHoc from './study/TestHoc'
import TestHooks from './study/TestHooks'

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
]

export default routes