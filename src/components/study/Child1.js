import React from 'react'

export default function(props){
    return(
        <div>
            <h2>{props.aaa}</h2>
            {/* 把父组件传递过来的JSX变量渲染出来 */}
            { props.children }
        </div>
    )
}