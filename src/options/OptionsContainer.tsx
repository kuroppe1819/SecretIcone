import * as React from 'react';
import { useCallback } from 'react';
import { OptionsMain, OptionMainProps } from './components/OptionsMain';
import { DropEvent } from 'react-dropzone';

export const OptionsContainer = () => {
    const MIN_IMAGE_SIZE = 0;
    const MAX_IMAGE_SIZE = 1000000;
    const clickable = false;
    const accept = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg'];
    const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: File[], event: DropEvent) => {
        console.log(acceptedFiles);
        console.log(rejectedFiles);
        console.log(event);
    }, []);

    const options: any = {
        minSize: MIN_IMAGE_SIZE,
        maxSize: MAX_IMAGE_SIZE,
        accept: accept,
        noClick: !clickable,
        onDrop: onDrop,
    };

    const props: OptionMainProps = {
        options: options,
    };

    return <OptionsMain {...props} />;
};
