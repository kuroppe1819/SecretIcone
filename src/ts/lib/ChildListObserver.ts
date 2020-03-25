type Callback = (icons: Array<HTMLElement>) => void;

export const childListObserver = (targetEl: HTMLElement, selectors: string, callback: Callback) => {
    const observer = new MutationObserver((records: MutationRecord[]) => {
        for (const record of records) {
            for (const node of Array.from(record.addedNodes)) {
                const el = node as HTMLElement;
                if (el.querySelectorAll) {
                    const childList: ArrayLike<HTMLElement> = el.querySelectorAll(selectors);
                    callback(childList as HTMLElement[]);
                }

                if (el.getElementsByTagName) {
                    const iframeCollection = el.getElementsByTagName('iframe');
                    for (const iframeEl of Array.from(iframeCollection)) {
                        iframeEl.contentWindow.onload = () => {
                            if (iframeEl.contentDocument !== null && iframeEl.contentDocument.body !== null) {
                                childListObserver(iframeEl.contentDocument.body, selectors, callback);
                            }
                        };
                    }
                }
            }
        }
    });
    observer.observe(targetEl, {
        childList: true,
        subtree: true,
    });
};
