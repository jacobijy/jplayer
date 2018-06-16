import { dialog, Menu, shell } from 'electron';

const template = [
    {
        label: 'File',
        submenu: [
            {
                label: 'open',
                click() {
                }
            },
            { label: 'exit', role: 'quit' }
        ]
    }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
