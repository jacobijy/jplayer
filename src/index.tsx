import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainPlayer from './renderer/player';
import Controller from './renderer/controller';
import { ipcRenderer, remote } from 'electron';

ipcRenderer.on('action', (event: Event, arg: string) => {
    switch (arg) {
        case 'open':
            let currentFile = null;
            const files = remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
                filters: [
                    { name: 'Text Files', extensions: ['mp4', 'mkv', 'flv'] },
                    { name: 'All Files', extensions: ['*'] }],
                properties: ['openFile']
            });
            if (files) {
                currentFile = files[0];
                const video = document.querySelector('video');
                video.src = `file://${currentFile}`;
                // readFile(currentFile, (err: Error, buffer: Buffer) => {
                //     console.log(buffer);
                // });
            }
            break;

        default:
            break;
    }
});

interface IJPlayerState {
    time: number;
    totalTime: number;
    playing: boolean;
    paused: boolean;
    volume: number;
}

class JPlayer extends React.Component<{}, IJPlayerState> {
    video: HTMLVideoElement;
    timer: number;

    constructor(props: {}) {
        super(props);

        this.state = {
            time: 0,
            totalTime: 0,
            playing: false,
            paused: true,
            volume: 50
        };
    }

    componentDidMount() {
        this.video = document.querySelector('video');
    }

    handlePlaying() {
        this.setState({
            time: this.state.time ? this.state.time : 0,
            playing: true,
            paused: false,
            totalTime: this.video.duration
        });
        this.timer = window.setInterval(() => {
            this.setState({
                time: this.video.currentTime
            });
        }, 1000);
    }

    handlePause() {
        this.setState({
            playing: false,
            paused: true,
            time: this.video.currentTime
        });
        window.clearInterval(this.timer);
    }

    handleVolumeChange(event: React.SyntheticEvent) {
        this.setState({
            volume: this.video.volume
        });
    }

    render() {
        const { time, totalTime, playing, paused, volume } = this.state;
        return (
            <div className='fill-container'>
                <MainPlayer
                    window={{ width: 800, height: 600, scale: 1 }}
                    handlePause={this.handlePause.bind(this)}
                    handlePlaying={this.handlePlaying.bind(this)}
                    handleVolumeChange={this.handleVolumeChange.bind(this)}
                />
                <Controller
                    time={time}
                    totalTime={totalTime}
                    playing={playing}
                    paused={paused}
                    volume={volume}
                />
            </div>
        );
    }
}

ReactDOM.render(<JPlayer />, document.getElementById('app'));
