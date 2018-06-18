import * as React from 'react';
import Progress from './components/progress';
import PlayPanel from './playpanel';
import PlayButton from './playpanel';

interface IControllerProps {
    time: number;
    totalTime: number;
    playing: boolean;
    paused: boolean;
    volume: number;
}

export default class Controller extends React.Component<IControllerProps> {
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
        const { time, totalTime = 0, playing, paused, volume } = this.props;
        return (
            <div
                id='controller'
                className='fill-container'
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseOut={this.handleMouseOut.bind(this)}
            >
                <div className='bottom'>
                    <Progress
                        percent={totalTime === 0 ? 0 : time / totalTime}
                    />
                    <PlayPanel paused={paused} />
                </div>
            </div>
        );
    }
}
