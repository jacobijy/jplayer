import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainPlayer from './render';
import { ipcRenderer, remote } from 'electron';
import { readFile } from 'fs';

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

class JPlayer extends React.Component<{}, {}> {
    render() {
        return <MainPlayer window={{ width: 800, height: 600, scale: 1 }} />;
    }
}

ReactDOM.render(<JPlayer />, document.getElementById('app'));
