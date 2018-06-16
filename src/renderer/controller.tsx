import * as React from 'react';
import Progress from './components/progress';

interface IControllerState {
    time: number;
    totalTime: number;
    playing: boolean;
    paused: boolean;
    volume: number;
}

export default class Controller extends React.Component<{}, IControllerState> {
    private controlPanel: HTMLDivElement;

    componentDidMount() {
        this.controlPanel = document.querySelector('#controller');
    }

    handleMouseOver(event: MouseEvent) {
        this.controlPanel.className = 'fill-container';
    }

    handleMouseOut(event: MouseEvent) {
        this.controlPanel.className = 'fill-container hide';
    }

    render() {
        return (
            <div
                id='controller'
                className='fill-container'
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseOut={this.handleMouseOut.bind(this)}
            >
                <Progress />
            </div>
        );
    }
}
