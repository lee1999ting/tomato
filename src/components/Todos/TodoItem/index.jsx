import React, { Component } from 'react'
import './TodoItem.css'

export default class TodoItem extends Component {
	state = {mouse:false} //标识鼠标移入、移出

	//鼠标移入、移出的回调
	handleMouse = flag => {
		return ()=>{
			this.setState({mouse:flag})
		}
	}
	//勾选、取消勾选某一个todo的回调
	handleCheck = id => {
        return (event) => {
            this.props.updateTodo(id,{checked:event.target.checked})
		}
	}

	//删除一个todo的回调
	handleDelete = id => {
		if(window.confirm('确定删除吗？')){
			this.props.deleteTodo(id)
		}
	}

	render() {
		const {id,task,checked} = this.props
		const {mouse} = this.state
		return (
			<li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
				<label>
					<input type="checkbox" checked={checked} onChange={this.handleCheck(id)}/>
					<span>{task}</span>
				</label>
				<button onClick={() => this.handleDelete(id) } className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
			</li>
		)
	}
}
