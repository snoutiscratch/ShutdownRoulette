const {app, BrowserWindow} = require("electron");
const path = require("path");

const isDev = !app.isPackaged;

function createWindow() {
    const win = new BrowserWindow({
        width: 621,
        height: 420,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },

        autoHideMenuBar: true,
        menuBarVisible: false
    });

    if (isDev) {
        // Load Astro dev server
        win.loadURL("http://localhost:4321");
    } else {
        // Load built Astro output
        win.loadFile(path.join(__dirname, "../electron/dist/index.html"));
    }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
