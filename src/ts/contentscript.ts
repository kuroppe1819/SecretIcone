import { MutateConvertIcon } from './lib/MutateConvertIcon';
import { StorageAccess } from './lib/StorageAccess';
import { extractIdFrom, extractHashFrom } from './lib/ExtractIdentifier';

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

    userPhotoEl.style.backgroundImage = `url('${toImageUrl}')`;
    userPhotoEl.style.backgroundSize = 'contain';

    const mutateConvertIcon = new MutateConvertIcon(id, hash, toImageUrl);
    mutateConvertIcon.observeAppComments();
    mutateConvertIcon.observeSpaceMemberIcon();
    mutateConvertIcon.observeThreadCommentIcon();
};

main();
