export class StorageAccess {
    private static IMAGE_URL = 'IMAGE_URL';
    private static IS_SHOW_ALERT = 'IS_SHOW_ALERT';

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

    public static async getShowConfirmFlag(): Promise<boolean | undefined> {
        return new Promise(resolve =>
            chrome.storage.local.get([this.IS_SHOW_ALERT], items => resolve(items[this.IS_SHOW_ALERT]))
        );
    }

    public static async setShowConfirmFlag(isShowAlert: boolean): Promise<void> {
        return new Promise(resolve => {
            chrome.storage.local.set(
                {
                    IS_SHOW_ALERT: isShowAlert,
                },
                () => resolve()
            );
        });
    }
}
