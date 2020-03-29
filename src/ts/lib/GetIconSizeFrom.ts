enum IconSizeType {
    SMALL = 'SMALL',
    NORMAL = 'NORMAL',
    SIZE_24 = 'SIZE_24',
    SIZE_32 = 'SIZE_32',
    SIZE_48 = 'SIZE_48',
    SIZE_48_R = 'SIZE_48_R',
    SIZE_56 = 'SIZE_56',
    SIZE_96 = 'SIZE_96',
    SIZE_96_R = 'SIZE_96_R',
}

export type IconSize = {
    width: string;
    height: string;
};

export const getIconSizeFrom = (type: IconSizeType | string): IconSize => {
    switch (type) {
        case IconSizeType.SMALL: {
            return { width: '16px', height: '16px' };
        }
        case IconSizeType.NORMAL: {
            return { width: '36px', height: '36px' };
        }
        case IconSizeType.SIZE_24: {
            return { width: '24px', height: '24px' };
        }
        case IconSizeType.SIZE_32: {
            return { width: '32px', height: '32px' };
        }
        case IconSizeType.SIZE_48:
        case IconSizeType.SIZE_48_R: {
            return { width: '48px', height: '48px' };
        }
        case IconSizeType.SIZE_56: {
            return { width: '56px', height: '56px' };
        }
        case IconSizeType.SIZE_96:
        case IconSizeType.SIZE_96_R: {
            return { width: '96px', height: '96px' };
        }
        default: {
            return { width: '128px', height: '128px' };
        }
    }
};
