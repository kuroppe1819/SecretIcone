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

    public observeAppComments() {
        const mutateIcons = wrappers => {
            for (const wrapper of wrappers) {
                const icon = wrapper.querySelector('img');
                const userIcon = icon.getAttribute('src');
                const userIconId = extractIdFrom(userIcon);
                const userIconHash = extractHashFrom(userIcon);
                if (this.id === userIconId && this.hash === userIconHash) {
                    icon.setAttribute('src', this.toImageUrl);
                    icon.style.width = '36px';
                    icon.style.height = '36px';
                    icon.style.backgroundSize = 'contain';
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

    public observeSpaceMemberIcon() {
        childListObserver('.gaia-argoui-panelscrollinglist-icon', icons => {
            for (const icon of icons) {
                const userIcon = icon.style.backgroundImage;
                const userIconId = extractIdFrom(userIcon);
                const userIconHash = extractHashFrom(userIcon);
                if (this.id === userIconId && this.hash === userIconHash) {
                    icon.style.backgroundImage = `url('${this.toImageUrl}')`;
                    icon.style.backgroundSize = 'contain';
                }
            }
        });
    }

    public observeThreadCommentIcon() {
        childListObserver('.ocean-ui-comments-commentbase-usericon', icons => {
            for (const icon of icons) {
                const userIcon = icon.style.backgroundImage;
                const userIconId = extractIdFrom(userIcon);
                const userIconHash = extractHashFrom(userIcon);
                if (this.id === userIconId && this.hash === userIconHash) {
                    icon.style.backgroundImage = `url('${this.toImageUrl}')`;
                    icon.style.backgroundSize = 'contain';
                }
            }
        });
    }
}
