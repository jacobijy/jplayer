"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var RenderActionShortcuts = {
    Space: 'play/pause',
    Left: 'playback',
    Right: 'playforward',
    Up: 'volumeup',
    Down: 'volumedown'
};
function RegisterShortcut() {
    var mainWindow = electron_1.BrowserWindow.getFocusedWindow();
    electron_1.globalShortcut.register('CommandOrControl+R', function () {
        mainWindow.reload();
    });
    Object.keys(RenderActionShortcuts).map(function (value) {
        electron_1.globalShortcut.register(value, function () {
            mainWindow.webContents.send('action', RenderActionShortcuts[value]);
        });
    });
}
exports.default = RegisterShortcut;
//# sourceMappingURL=shortcut.js.map