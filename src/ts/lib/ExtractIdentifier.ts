export const extractIdFrom = (imageUrl: string): string | null => {
    const matchArray = imageUrl.match(/^.*id=(\w+)\&.*$/);
    return matchArray ? matchArray[1] : null;
};

export const extractHashFrom = (imageUrl: string): string => {
    const matchArray = imageUrl.match(/^.*hash=(\w+)\&.*$/);
    return matchArray ? matchArray[1] : null;
};

export const extractSizeFrom = (imageUrl: string): string => {
    const matchArray = imageUrl.match(/^.*size=(\w+)\&.*$/);
    return matchArray ? matchArray[1] : null;
};
