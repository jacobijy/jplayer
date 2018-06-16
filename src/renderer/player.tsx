import * as React from 'react';
import './css/App.css';

interface IPlayerProps {
    window: {
        width: number,
        height: number,
        scale: number
    }
    handlePlaying: () => void
    handlePause: () => void
    handleVolumeChange: () => {}
}

export default class MainPlayer extends React.Component<IPlayerProps> {
    constructor(props: IPlayerProps) {
        super(props);
    }

    render() {
        const { handlePlaying, handlePause, handleVolumeChange } = this.props;
        return (
            <video
                width='100%'
                height='100%'
                onPlaying={handlePlaying}
                onPause={handlePause}
                onVolumeChange={handleVolumeChange}
                autoPlay
            >
            </video>
        );
    }
}
