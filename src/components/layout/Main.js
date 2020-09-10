import React from 'react'

import { Route,Switch } from 'react-router-dom'
// import TestJsx from '../../views/study/TestJsx'
// import TestList from '../../views/study/TestList'
import routes from '../../views/'
export default class Main extends React.Component{
    createRoute(){
        return routes.map(ele=>(
            <Route key={ele.id} path={ele.path} component={ele.component}></Route>
        ))
    }
    render(){
        return(
            <div className="kb-main">
                <Switch>
                    {this.createRoute()}
                </Switch>
                
            </div>
        )
    }
}