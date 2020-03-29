type Callback = (childList: HTMLCollectionOf<Element>) => void;

export const childListObserver = (targetEl: HTMLElement, tagName: string, callback: Callback) => {
    const observer = new MutationObserver((records: MutationRecord[]) => {
        for (const record of records) {
            for (const node of Array.from(record.addedNodes)) {
                const el = node as HTMLElement;
                if (!el.getElementsByTagName) {
                    continue;
                }
                const childList: HTMLCollectionOf<Element> = el.getElementsByTagName(tagName);
                callback(childList as HTMLCollectionOf<Element>);

                const iframeCollection = el.getElementsByTagName('iframe');
                for (const iframeEl of Array.from(iframeCollection)) {
                    iframeEl.contentWindow.onload = () => {
                        if (iframeEl.contentDocument !== null && iframeEl.contentDocument.body !== null) {
                            childListObserver(iframeEl.contentDocument.body, tagName, callback);
                        }
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
