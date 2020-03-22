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

    public appComments() {
        const mutateIcons = wrappers => {
            for (const wrapper of wrappers) {
                const icon = wrapper.querySelector('img');
                const userIcon = icon.getAttribute('src');
                const userIconId = extractIdFrom(userIcon);
                const userIconHash = extractHashFrom(userIcon);
                if (this.id === userIconId && this.hash === userIconHash) {
                    icon.setAttribute('src', this.toImageUrl);
                }
            }
        };
        const iconWrapeerClassName = '.itemlist-userImage-gaia';
        const wrappers = document.querySelectorAll(iconWrapeerClassName);
        mutateIcons(wrappers);
        childListObserver(iconWrapeerClassName, wrappers => {
            mutateIcons(wrappers);
        });
    }
}
