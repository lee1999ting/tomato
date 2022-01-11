import React, { Component } from 'react'
import Todos from '../Todos'
import Tomato from '../Tomato'

export default class Task extends Component {
    render() {
        return (
            <div>
                <Tomato/>
                <Todos/>
            </div>
        )
    }
}
