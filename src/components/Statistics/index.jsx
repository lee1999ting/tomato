import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Statistic.css'

class Statistics extends Component {
    render() {
        const {todos} = this.props;
        //完成的任务数
        const doneCount = todos.reduce((pre,todo) => pre + (todo.done ? 1 : 0),0);
        //总任务数
        const total = todos.length;
        if(!doneCount)
            return (<h3>完成任务数&nbsp;{doneCount+'/'+total}</h3>)
        return (
            <div>
                <h3>完成任务数&nbsp;{doneCount+'/'+total}</h3>
                <ul className="done-list">
                    {
                        todos.map(todoObj => {
                            if(todoObj.done){
                                return (
                                    <li key={todoObj.id} className="done-item">
                                        完成任务:【{todoObj.task}】
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect(
    state => ({todos:state.todos})
)(Statistics)