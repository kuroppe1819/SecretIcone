export const extractIdFrom = (imageUrl: string): string => {
    try {
        return imageUrl.match(/^.*id=(\w+)\&.*$/)[1];
    } catch {
        throw new Error('Not found id in url');
    }
};

export const extractHashFrom = (imageUrl: string): string => {
    try {
        return imageUrl.match(/^.*hash=(\w+)\&.*$/)[1];
    } catch {
        throw new Error('Not found hash in url');
    }
};
