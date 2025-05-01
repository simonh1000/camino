// Function to measure IndexedDB storage size
export async function measureIndexedDBSize() {
    try {
        // Get the origin's storage estimate
        const estimate = await navigator.storage.estimate();
        // console.log("Storage estimate:", estimate);

        // Convert to human-readable format and return
        const sizeInMB = (estimate.usage / (1024 * 1024)).toFixed(1);
        return sizeInMB;
    } catch (error) {
        console.error("Error measuring storage size:", error);
        // throw new Error(
        //     "Error measuring storage size. Check console for details."
        // );
        return 0;
    }
}
