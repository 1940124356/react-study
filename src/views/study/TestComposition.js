import React from 'react'
import { Modal } from '../../components/'

function PromotContent(props){
    return(
        <div>
            <h3>你确认要删除吗22222222</h3>
            <input type="text"/>
        </div>
    )
}

export default class TestComposition extends React.Component{
    render(){
        return (
            <div className="TestComposition">
                <h1>测试组合</h1>
                <Modal 
                tip={ <span>提示</span> }
                content={ <h3>你确认要删除吗</h3> }
                btn={ <button>确认</button> }
                ></Modal>

                <Modal 
                tip={ <span>警告</span> }
                content={ <PromotContent></PromotContent> }
                btn={ <div><button>确认</button><button>取消</button></div> }
                ></Modal>
            </div>
        )
    }
}