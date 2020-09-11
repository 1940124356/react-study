import React from 'react'

import { Route,Switch,Redirect,withRouter } from 'react-router-dom'
// import TestJsx from '../../views/study/TestJsx'
// import TestList from '../../views/study/TestList'
import routes from '../../views/'
class Main extends React.Component{
    createRoute(){
        let arr = []
        routes.map(ele=>{
            arr.push(
                <Route exact key={ele.id} path={ele.path} component={ele.component}></Route>
            )
            if(ele.children){
                ele.children.map(ele=>{
                    arr.push(<Route exact key={ele.id} path={ele.path} component={ele.component}></Route>)
                    return null
                })
            }
            return null
        })
        // console.log('arr',arr)
        return arr
    }
    render(){
        console.log('main props',this.props)
        return(
            <div className="kb-main">
                {/* Switch必须是Route直接父组件,中间不能任何其它组件间隔*/}
                <Switch>
                    {this.createRoute()}
                    {/* 重定向 */}
                    <Redirect form="/*" to="/jsx"></Redirect>
                </Switch>
                
            </div>
        )
    }
}
// withRouter方法是为了让Main.js也能拿到props.history等API
export default withRouter(Main)