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

export default class Player extends React.Component<IPlayerProps> {
    private video: HTMLVideoElement;

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
                poster='file://C:\Users\aston\Pictures\iCloud%20Photos\Downloads\539A94D3-EAA6-4C16-9C01-A439C0D9C2D6-9129-000007B58BE705B1_tmp.jpg'
                ref={ref => this.video = ref}
            >
            </video>
        );
    }
}
