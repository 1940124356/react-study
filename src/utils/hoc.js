import React from 'react'

//高阶组件：实际上是一个纯函数

function hoc(WrappedComponent){
    return class extends React.Component{
        render(){
            return (
                <div>
                    <h3>hoc content</h3>
                    <WrappedComponent></WrappedComponent>
                </div>
            )
        }
    }
}

export default hoc