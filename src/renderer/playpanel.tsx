import * as React from 'react';
import './iconfont/iconfont.css';

export default class PlayPanel extends React.Component {
    render() {
        return (
            <div>
                <span><i className='icon iconfont icon-left'></i></span>
                <span><i className='icon iconfont icon-triangle'></i></span>
                <span><i className='icon iconfont icon-right'></i></span>
            </div>
        );
    }
}
