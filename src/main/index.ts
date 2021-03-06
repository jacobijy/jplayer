// Modules to control application life and create native browser window
import { app, BrowserWindow, globalShortcut } from 'electron';
import { join } from 'path';
import RegisterMenu from './menu';
import RegisterShortcut from './shortcut';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: BrowserWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({ width: 800, height: 600 });

    // and load the index.html of the app.
    mainWindow.loadURL(`file://${join(__dirname, '../index.html')}`);

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
    BrowserWindow.addDevToolsExtension('C:\\Users\\aston\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\3.2.3_0');
    BrowserWindow.addDevToolsExtension('C:\\Users\\aston\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\lmhkpmbekcpmknklioeibfkpmmfibljd\\2.15.2_0');

    RegisterMenu();
    RegisterShortcut();

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    // When window is blur unregister shortcuts
    mainWindow.on('blur', () => {
        const win = BrowserWindow.getFocusedWindow();
        if (win)
        {
            return;
        }
        globalShortcut.unregisterAll();
    });

    // When window is focus register shortcuts
    mainWindow.on('focus', () => {
        RegisterShortcut();
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.

    if (mainWindow === null) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
