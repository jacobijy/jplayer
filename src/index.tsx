import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IPlayerProps { window: { width: number, height: number, scale: number }; }

export default class MainPlayer extends React.Component<IPlayerProps> {
    render() {
        return (
            <video style={{width:'100%', height:'100%'}}></video>
        );
    }
}

ReactDOM.render(<MainPlayer window={{ width: 800, height: 600, scale: 1 }} />, document.getElementById('app'));
