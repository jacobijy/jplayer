"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var template = [
    {
        label: 'File',
        submenu: [
            {
                label: 'open',
                click: function () {
                }
            },
            { label: 'exit', role: 'quit' }
        ]
    }
];
var menu = electron_1.Menu.buildFromTemplate(template);
electron_1.Menu.setApplicationMenu(menu);
//# sourceMappingURL=menu.js.map