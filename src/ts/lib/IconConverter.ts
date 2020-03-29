import { extractHashFrom, extractIdFrom, extractSizeFrom } from './ExtractIdentifier';
import { getIconSizeFrom } from './GetIconSizeFrom';

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
                const userIconSize = extractSizeFrom(userIcon);
                const iconSize = getIconSizeFrom(userIconSize);
                imgEl.style.height = iconSize.height;
                imgEl.style.width = iconSize.width;
            }
        }
    }

    private convertBackgroundOf(nodesOrCollection: NodeList | HTMLCollectionOf<Element>) {
        for (const node of Array.from(nodesOrCollection)) {
            const iconEl = node as HTMLElement;
            const userIcon = iconEl.style.backgroundImage;
            const userIconId = extractIdFrom(userIcon);
            const userIconHash = extractHashFrom(userIcon);
            if (this.id === userIconId && this.hash === userIconHash) {
                iconEl.style.backgroundImage = `url('${this.toImageUrl}')`;
                iconEl.style.backgroundSize = 'contain';
            }
        }
    }

    public convertSpanElementsIn(el: HTMLElement) {
        const collection = el.getElementsByTagName('span');
        this.convertBackgroundOf(collection);
    }

    public convertThreadCommentIcon(el: HTMLElement) {
        const nodes = el.querySelectorAll('.ocean-ui-comments-commentbase-usericon');
        this.convertBackgroundOf(nodes);
    }

    public convertPeopleUserProfileIcon(el: HTMLElement) {
        const nodes = el.querySelectorAll('.gaia-argoui-people-cover-icon');
        this.convertBackgroundOf(nodes);
    }
}
