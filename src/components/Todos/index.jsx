import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addTodo, updateTodo, deleteTodo } from '../../redux/actions/todos'
import { addTomato, updateTomato ,finishTomato } from '../../redux/actions/tomato'
import TodoItem from './TodoItem'
import './Todos.css'

class Todos extends Component {

    //键盘事件的回调，用于添加任务
	handleKeyUp = event => {
		//解构赋值获取keyCode,target
		const {keyCode,target} = event
		//判断是否是回车按键
		if(keyCode !== 13) return
		//添加的todo名字不能为空
		if(target.value.trim() === ''){
			alert('输入不能为空')
			return
		}
		//准备好一个todo对象
		const todoObj = {
            id:nanoid(),
            task:target.value,
            checked:false,
            start:false,
            done:false
        };
		//将todoObj传递给actionCreater
		this.props.addTodo(todoObj);
		//清空输入
		target.value = '';
	}

	//用于全选任务
	handleCheckAll = event =>{
        const {todos,updateTodo} = this.props;
		todos.map(todoObj => updateTodo(todoObj.id,{checked:event.target.checked}))
	}

	//用于开始番茄任务
	handleStart = () => {
		const {todos,updateTodo,addTomato} = this.props;
        //开始的任务
        const start = todos.filter(todo => !todo.start && todo.checked );
        if(!start.length){
            alert('请选择要开始的任务!');
            return;
        }else if(start.length>48){
            alert('最多可选择48个任务!');
            return;
        }
        //更新todos
        start.map(todoObj => updateTodo(todoObj.id,{start:true}));
        //倒计时的时间(秒)
        let totalTime = (start.length*30 - 5)*60;
        //准备好一个tomato对象
        const newTomato = {
            time:totalTime,
            finish:false
        };
        //开始番茄
        addTomato(newTomato);

        //倒计时
        this.countDown(totalTime,start);
	}

    countDown = (totalTime,start) => {
        const {updateTomato,finishTomato,updateTodo} =this.props;
        let count = totalTime;
        let i = 0;//任务的索引值
        let id = setInterval(() => {
            count--;
            updateTomato(count);
            if(i < start.length && (totalTime-count) === (1800*i+1500)){
                updateTodo(start[i].id,{done:true});
                // console.log(`tomato${count}`);
                console.log('任务完成',start[i].task);
                if(i !== (start.length-1)){
                    alert(`完成任务【${start[i].task}】，休息5分钟吧!`);                
                }
                i++;
            }
            if(i < start.length && (totalTime-count) === 1800*i)
                alert('休息结束，开始下一个任务吧!');
            if(!count){
                finishTomato();
                clearInterval(id);
                alert(`完成任务【${start[start.length-1].task}】恭喜你完成所有任务!`);
            }
        },1000);
    }
    
    render() {
        const {todos,tomato,updateTodo,deleteTodo} = this.props;
        //选中的任务数
		const checkedCount = todos.reduce((pre,todo)=> pre + (todo.checked && !todo.start ? 1 : 0),0);
		//当前任务数
		const total = todos.reduce((pre,todo)=> pre + (!todo.start ? 1 : 0),0);
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <div className="todo-header">
                        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                    </div>
                    <ul className="todo-main">
                        {
                            !total ? 
                            (<div className='empty'>当前任务列表为空，请添加任务!</div>) : 
                            todos.map( todoObj => {
                                if(!todoObj.start)
                                    return <TodoItem key={todoObj.id} {...todoObj} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                            })
                        }
                    </ul>
                    <div className="todo-footer">
                        <label>
                            <input type="checkbox" onChange={this.handleCheckAll} checked={checkedCount === total && total !== 0 ? true : false}/>
                        </label>
                        <span>
                            选中任务数{checkedCount}/总任务{total}
                        </span>
                        <button 
                            onClick={this.handleStart} 
                            className={tomato.finish ? "btn btn-start":"btn btn-working"}
                            disabled={!tomato.finish}
                        >开始任务</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        todos:state.todos,
        tomato:state.tomato
    }),//映射状态
	{
        addTodo,
        updateTodo,
        deleteTodo,
        addTomato,
        updateTomato,
        finishTomato
    }//映射操作状态的方法
)(Todos)
