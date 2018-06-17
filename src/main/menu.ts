import { BrowserWindow, Menu } from 'electron';

export default function RegisterMenu() {
    const mainWindow = BrowserWindow.getFocusedWindow();
    const template = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'open',
                    click() {
                        mainWindow.webContents.send('action', 'open');
                    }
                },
                { label: 'exit', role: 'quit' }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}
