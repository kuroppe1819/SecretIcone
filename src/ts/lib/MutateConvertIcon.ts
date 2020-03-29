import { childListObserver } from './ChildListObserver';
import { extractIdFrom, extractHashFrom } from './ExtractIdentifier';

export class MutateConvertIcon {
    private id;
    private hash;
    private toImageUrl;

    constructor(id: string, hash: string, toImageUrl: string) {
        this.id = id;
        this.hash = hash;
        this.toImageUrl = toImageUrl;
    }

    public observeImgTag() {
        const convertIconFunc = (collection: HTMLCollectionOf<Element>) => {
            for (const el of Array.from(collection)) {
                const imgEl = el as HTMLImageElement;
                const userIcon = imgEl.getAttribute('src');
                const userIconId = extractIdFrom(userIcon);
                const userIconHash = extractHashFrom(userIcon);

                if (
                    userIconId === null ||
                    userIconHash === null ||
                    this.id !== userIconId ||
                    this.hash !== userIconHash
                ) {
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
                }
            }
        };
        convertIconFunc(document.getElementsByTagName('img'));
        childListObserver(document.body, 'img', convertIconFunc);
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
