import {ipcMain} from "electron";
import {exec} from "child_process";

/**
 * Sets up the shutdown API call
 */
export function setupShutdown() {
    ipcMain.handle("shutdown", async () => {
        try {
            // Linux
            // TODO: Replace with real shutdown command
            exec("echo 'dingofox'", (error, stdout, stderr) => {
                if (error) {
                    console.error("Shutdown failed:", error);
                } else {
                    console.log("Shutdown command sent");
                }
            });
            return {success: true};
        } catch (err) {
            console.error(err);
            return {success: false, error: err};
        }
    });
}