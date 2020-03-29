import { extractHashFrom, extractIdFrom } from './lib/ExtractIdentifier';
import { StorageAccess } from './lib/StorageAccess';
import { childListObserver } from './lib/ChildListObserver';
import { IconConverter } from './lib/IconConverter';

const main = async () => {
    const userPhotoEl = document.querySelector('.gaia-header-header-user-photo') as HTMLSpanElement;
    if (!userPhotoEl) {
        return;
    }

    const toImageUrl = await StorageAccess.getImageUrl();
    if (toImageUrl === null || toImageUrl === undefined) {
        return;
    }

    const userIcon = userPhotoEl.style.backgroundImage;
    const id = extractIdFrom(userIcon);
    const hash = extractHashFrom(userIcon);
    const imgTagName = 'img';
    const spanTagName = 'span';
    const imgCollection = document.getElementsByTagName(imgTagName);
    const spanCollection = document.getElementsByTagName(spanTagName);
    const iconConverter = new IconConverter(id, hash, toImageUrl);
    iconConverter.convertImgElements(imgCollection);
    iconConverter.convertSpanElements(spanCollection);
    childListObserver(document.body, imgTagName, iconConverter.convertImgElements.bind(iconConverter));
    childListObserver(document.body, spanTagName, iconConverter.convertSpanElements.bind(iconConverter));
};

main();
