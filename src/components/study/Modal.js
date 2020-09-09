import React from 'react'
import '../../assets/modal/modal.min.css'
export default function Modal(props){
    return (
        <div className="modal">
            <div className="modal-top">
                {props.tip}
                {/* <span>提示</span> */}
                <span>X</span>
            </div>
            <div className="modal-min">{props.content}</div>
            <div className="modal-bot">
                {props.btn}
                {/* <button>确认</button> */}
            </div>
        </div>
    )
} 