import { BrowserWindow, globalShortcut } from 'electron';

export default function RegisterShortcut() {
    const mainWindow = BrowserWindow.getFocusedWindow();
    globalShortcut.register('CommandOrControl+R', () => {
        mainWindow.reload();
    });
}
