import React from 'react'

import { NavLink } from 'react-router-dom'
import routes from '../../views/'

export default class Aside extends React.Component{
    createNavLink(){
        return routes.map(ele=>(
            <div className="lo-link-row" key={ele.id}>
                <NavLink activeClassName="on" to={ele.path}>{ele.text}</NavLink>
            </div>
        ))
    }
    render(){
        return(
            <div className="kb-aside">
                {this.createNavLink()}
            </div>
        )
    }
}