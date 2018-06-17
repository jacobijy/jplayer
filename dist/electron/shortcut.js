"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
function RegisterShortcut() {
    var mainWindow = electron_1.BrowserWindow.getFocusedWindow();
    electron_1.globalShortcut.register('CommandOrControl+R', function () {
        mainWindow.reload();
    });
}
exports.default = RegisterShortcut;
//# sourceMappingURL=shortcut.js.map