import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './css/App.css';

export interface IPlayerProps { window: { width: number, height: number, scale: number }; }

export default class MainPlayer extends React.Component<IPlayerProps> {
    render() {
        return (
            <video width='100%' height='100%' autoPlay></video>
        );
    }
}
