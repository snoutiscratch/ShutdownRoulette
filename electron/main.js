import {app, BrowserWindow} from "electron";
import path from "path";
import { fileURLToPath } from "url";
import {setupShutdown} from "./shutdown.js"

const isDev = !app.isPackaged;

// Define __dirname in ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

app.whenReady().then(() => {
    createWindow();
    setupShutdown();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});