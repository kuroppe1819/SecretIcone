export class StorageAccess {
    private static IMAGE_URL = 'IMAGE_URL';

    public static async getImageUrl(): Promise<string | undefined> {
        return new Promise(resolve =>
            chrome.storage.local.get([this.IMAGE_URL], items => resolve(items[this.IMAGE_URL]))
        );
    }

    public static async setImageUrl(imageUrl: string | null): Promise<void> {
        return new Promise(resolve => {
            chrome.storage.local.set(
                {
                    IMAGE_URL: imageUrl,
                },
                () => resolve()
            );
        });
    }
}
