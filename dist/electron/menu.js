"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
function RegisterMenu() {
    var mainWindow = electron_1.BrowserWindow.getFocusedWindow();
    var template = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'open',
                    click: function () {
                        mainWindow.webContents.send('action', 'open');
                    }
                },
                { label: 'exit', role: 'quit' }
            ]
        }
    ];
    var menu = electron_1.Menu.buildFromTemplate(template);
    electron_1.Menu.setApplicationMenu(menu);
}
exports.default = RegisterMenu;
//# sourceMappingURL=menu.js.map