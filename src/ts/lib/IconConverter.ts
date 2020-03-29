import { extractHashFrom, extractIdFrom } from './ExtractIdentifier';

export class IconConverter {
    private id;
    private hash;
    private toImageUrl;

    constructor(id: string, hash: string, toImageUrl: string) {
        this.id = id;
        this.hash = hash;
        this.toImageUrl = toImageUrl;
    }

    public convertImgElementsIn(el: HTMLElement) {
        const collection = el.getElementsByTagName('img');
        for (const el of Array.from(collection)) {
            const imgEl = el as HTMLImageElement;
            const userIcon = imgEl.getAttribute('src');
            if (userIcon === null) {
                continue;
            }

            const userIconId = extractIdFrom(userIcon);
            const userIconHash = extractHashFrom(userIcon);
            if (userIconId === null || userIconHash === null || this.id !== userIconId || this.hash !== userIconHash) {
                continue;
            }

            const tmpHeight = imgEl.getAttribute('height');
            const tmpWidth = imgEl.getAttribute('width');
            imgEl.setAttribute('src', this.toImageUrl);
            imgEl.style.backgroundSize = 'contain';
            if (tmpHeight !== null && tmpWidth !== null) {
                imgEl.setAttribute('height', tmpHeight);
                imgEl.setAttribute('width', tmpWidth);
            } else {
                imgEl.style.height = '36px';
                imgEl.style.width = '36px';
                // normal 36px
                // small 24px
            }
        }
    }

    public convertSpanElementsIn(el: HTMLElement) {
        const collection = el.getElementsByTagName('span');
        for (const el of Array.from(collection)) {
            const spanEl = el as HTMLSpanElement;
            const userIcon = spanEl.style.backgroundImage;
            const userIconId = extractIdFrom(userIcon);
            const userIconHash = extractHashFrom(userIcon);
            if (this.id === userIconId && this.hash === userIconHash) {
                spanEl.style.backgroundImage = `url('${this.toImageUrl}')`;
                spanEl.style.backgroundSize = 'contain';
            }
        }
    }

    // public observeSpaceMemberIcon() {
    //     childListObserver(document.body, '.gaia-argoui-panelscrollinglist-icon', icons => {
    //         for (const icon of icons) {
    //             const userIcon = icon.style.backgroundImage;
    //             const userIconId = extractIdFrom(userIcon);
    //             const userIconHash = extractHashFrom(userIcon);
    //             if (this.id === userIconId && this.hash === userIconHash) {
    //                 icon.style.backgroundImage = `url('${this.toImageUrl}')`;
    //                 icon.style.backgroundSize = 'contain';
    //             }
    //         }
    //     });
    // }

    // public observeThreadCommentIcon() {
    //     childListObserver(document.body, '.ocean-ui-comments-commentbase-usericon', icons => {
    //         for (const icon of icons) {
    //             const userIcon = icon.style.backgroundImage;
    //             const userIconId = extractIdFrom(userIcon);
    //             const userIconHash = extractHashFrom(userIcon);
    //             if (this.id === userIconId && this.hash === userIconHash) {
    //                 icon.style.backgroundImage = `url('${this.toImageUrl}')`;
    //                 icon.style.backgroundSize = 'contain';
    //             }
    //         }
    //     });
    // }

    // public observePeopleUserProfileIcon() {
    //     childListObserver(document.body, '.gaia-argoui-people-cover-icon', icons => {
    //         for (const icon of icons) {
    //             const userIcon = icon.style.backgroundImage;
    //             const userIconId = extractIdFrom(userIcon);
    //             const userIconHash = extractHashFrom(userIcon);
    //             if (this.id === userIconId && this.hash === userIconHash) {
    //                 icon.style.backgroundImage = `url('${this.toImageUrl}')`;
    //                 icon.style.backgroundSize = 'contain';
    //             }
    //         }
    //     });
    // }
}
