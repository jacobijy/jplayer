import * as React from 'react';
import { ipcRenderer } from 'electron';
import './iconfont/iconfont.css';

interface IPlayPanelProps {
    paused: boolean;
}

export default class PlayPanel extends React.Component<IPlayPanelProps> {

    handlePlayOperation(index: number) {
        const video = document.querySelector('video');
        switch (index) {
            case 1:
                {
                    let time = Math.max(0, video.currentTime - 10);
                    video.currentTime = time;
                }
                break;

            case 2:
                {
                    if (video.paused) {
                        video.play();
                    }
                    else {
                        video.pause();
                    }
                }
                break;

            case 3:
                {
                    let time = Math.min(video.duration, video.currentTime + 10);
                    video.currentTime = time;
                }
                break;

            default:
                break;
        }
    }

    render() {
        let paused = this.props.paused;
        return (
            <ul id='play-panel'>
                <li onClick={this.handlePlayOperation.bind(this, 1)}><i className='icon iconfont icon-left'></i></li>
                <li onClick={this.handlePlayOperation.bind(this, 2)}><i className={`icon iconfont ${paused ? 'icon-triangle' : 'icon-pause'}`}></i></li>
                <li onClick={this.handlePlayOperation.bind(this, 3)}><i className='icon iconfont icon-right'></i></li>
            </ul>
        );
    }
}
