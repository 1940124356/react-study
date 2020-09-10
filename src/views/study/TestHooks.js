import React,{ useState,useEffect } from 'react'


export default function TestHooks (props){
    let [ count, setCount ] = useState(1)
    let [ list,setList ] = useState([])
    function changeCount(){
        count+=1
        setCount(count)
        setList([1,2,3,4])
    }
    // useEffect(()=>{
    //     console.log('mounted')
    //     timer = setTimeout(()=>{
    //         setList([1,2,3,4])
    //     },1000)

    //     return ()=>{
    //         clearTimeout(timer)
    //     }
    // })
    useEffect(()=>{
        console.log('count发生了变化')
        return undefined
    },[count])
    function createList(){
        return list.map(ele=>(
            <div key={ele}>{ele}</div>
        ))
    }
    return(
        <div>
            <h1>我是Hooks函数组件</h1>
            <h3>{count}</h3>
            <button onClick={changeCount}>改变count</button>
            {createList()}
        </div>
    )
}