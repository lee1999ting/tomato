import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        )
    }
}
