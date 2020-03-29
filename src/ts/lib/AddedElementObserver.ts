type Callback = (addedEl: HTMLElement) => void;

export const addedElementObserver = (targetEl: HTMLElement, callbackList: Callback[]) => {
    const observer = new MutationObserver((records: MutationRecord[]) => {
        for (const record of records) {
            for (const node of Array.from(record.addedNodes)) {
                const el = node as HTMLElement;
                if (!el.getElementsByTagName) {
                    continue;
                }
                for (const callback of callbackList) {
                    callback(el);
                }
                const iframeCollection = el.getElementsByTagName('iframe');
                for (const iframeEl of Array.from(iframeCollection)) {
                    iframeEl.contentWindow.onload = () => {
                        const iframeBody = iframeEl.contentDocument.body;
                        for (const callback of callbackList) {
                            callback(iframeBody);
                        }
                        addedElementObserver(iframeBody, callbackList);
                    };
                }
            }
        }
    });
    observer.observe(targetEl, {
        childList: true,
        subtree: true,
    });
};
