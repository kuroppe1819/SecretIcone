const main = () => {
    const userPhotoEl = document.querySelector('.gaia-header-header-user-photo') as HTMLElement;
    if (!userPhotoEl) {
        return;
    }

    const userIconImageUrl = userPhotoEl.style.backgroundImage;
};

main();
