const {contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld("api", {
    ping: () => "pong",
    shutdown: () => ipcRenderer.invoke("shutdown")
});