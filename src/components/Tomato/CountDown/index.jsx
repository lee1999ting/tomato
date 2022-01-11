import React, { Component } from 'react'

export default class CountDown extends Component {
    
    render() {
        const {time} = this.props;
        const h = Math.floor(time / 60 / 60) % 24;
        const m = Math.floor(time / 60) % 60;
        const s = time % 60;
        if(h){
            return (
            <div className='time'>
                {h < 10 ? '0' + h : h}:{m < 10 ? '0' + m : m}:{s < 10 ? '0' + s : s}
            </div>
        )}
        else{
            return (
                <div className='time'>
                    {m < 10 ? '0' + m : m}:{s < 10 ? '0' + s : s}
                </div>
            )
        }
    }
}
