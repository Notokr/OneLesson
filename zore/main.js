const { app, BrowserWindow, ipcMain } = require('electron/main')
const { register, registryGet } = require("./registry/registry.mjs");

const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    width: 800,
    height: 600,
    frame: false,
    // transparent: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('src/index.html')
}
ipcMain.handle("ping", () => "pong");
ipcMain.handle("register", register);
ipcMain.handle("registryGet", registryGet);

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})