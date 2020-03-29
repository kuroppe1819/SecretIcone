import { extractHashFrom, extractIdFrom } from './lib/ExtractIdentifier';
import { IconConverter } from './lib/IconConverter';
import { StorageAccess } from './lib/StorageAccess';
import { addedElementObserver } from './lib/AddedElementObserver';

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
    const body = document.body;
    const iconConverter = new IconConverter(id, hash, toImageUrl);
    iconConverter.convertImgElementsIn(body);
    iconConverter.convertSpanElementsIn(body);
    addedElementObserver(body, [
        iconConverter.convertImgElementsIn.bind(iconConverter),
        iconConverter.convertSpanElementsIn.bind(iconConverter),
    ]);
};

main();
