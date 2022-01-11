import React, { Component } from 'react'
import { connect } from 'react-redux'
import CountDown from './CountDown'
import './Tomato.css'

class Tomato extends Component {

    render() {
        const {tomato,todos} = this.props;
        if(!tomato.time)  
            return (
                <div className="tomato-container">
                    <div className="tomato-wrap">
                        <div className='time'>00:00</div>
                    </div>
                </div>
                )
        else{        
            return (
                <div className="tomato-container">
                    <div className="tomato-wrap"> 
                        <div className="tomato-countdown">
                            <CountDown time={tomato.time}/> 
                        </div>
                    </div>
                    <ul className="tomato-list">
                        {
                            todos.map(todo => {
                                if(todo.start && !todo.done)
                                    return (
                                        <li key={todo.id} className="tomato-item">
                                            任务:【{todo.task}】
                                        </li>
                                    )
                            })
                        }
                    </ul>
                </div>
            )
        }
    }
}
export default connect(
    state => ({
        tomato:state.tomato,
        todos:state.todos
    })
)(Tomato)