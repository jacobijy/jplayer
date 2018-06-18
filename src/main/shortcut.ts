import { BrowserWindow, globalShortcut } from 'electron';

const RenderActionShortcuts: { [key: string]: string } = {
    Space: 'play/pause',
    Left: 'playback',
    Right: 'playforward',
    Up: 'volumeup',
    Down: 'volumedown'
}

export default function RegisterShortcut() {
    const mainWindow = BrowserWindow.getFocusedWindow();
    globalShortcut.register('CommandOrControl+R', () => {
        mainWindow.reload();
    });

    Object.keys(RenderActionShortcuts).map(value => {
        globalShortcut.register(value, () => {
            mainWindow.webContents.send('action', RenderActionShortcuts[value]);
        })
    });
}
