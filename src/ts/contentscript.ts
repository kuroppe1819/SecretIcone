import { MutateConvertIcon } from './lib/MutateConvertIcon';
import { StorageAccess } from './lib/StorageAccess';
import { extractIdFrom, extractHashFrom } from './lib/ExtractIdentifier';

const replaceIcon = (el: HTMLElement, toImageUrl: string) => {
    el.style.backgroundImage = `url('${toImageUrl}')`;
    el.style.backgroundSize = 'contain';
};

const main = async () => {
    const userPhotoEl = document.querySelector('.gaia-header-header-user-photo') as HTMLElement;
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

    replaceIcon(userPhotoEl, toImageUrl); // ヘッダーの画像を置き換える
    const mutateConvertIcon = new MutateConvertIcon(id, hash, toImageUrl);
    // mutateConvertIcon.observeSpaceMemberIcon();
    // mutateConvertIcon.observeThreadCommentIcon();
    // mutateConvertIcon.observePeopleUserProfileIcon();
    // mutateConvertIcon.observeAppComments();
    mutateConvertIcon.observeImgTag();
};

main();
