export {};

/**
 * Extends window to support backend functions
 */
declare global {
    interface Window {
        api: {
            ping: () => string;
            shutdown: () => Promise<{ success: boolean; error?: any }>;
        };
        pullTrigger: () => void;
    }
}
