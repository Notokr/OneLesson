const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});

contextBridge.exposeInMainWorld("electronApi", {
  ping: () => ipcRenderer.invoke('ping'),
  registerer: () => ipcRenderer.invoke("registerer"),
  registryGet: () => ipcRenderer.invoke("registryGet"),
});