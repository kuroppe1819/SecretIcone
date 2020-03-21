import * as React from 'react';
import { useCallback, useState } from 'react';
import { OptionsMain, OptionMainProps } from './components/OptionsMain';
import { DropEvent, useDropzone } from 'react-dropzone';

export const OptionsContainer = () => {
    const [isRejected, isRejectedState] = useState(false);
    const [imageUrl, setImageUrl] = useState(undefined);

    const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: File[], event: DropEvent) => {
        if (acceptedFiles.length === 1 && rejectedFiles.length === 0) {
            isRejectedState(false);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(acceptedFiles[0]);
        } else {
            isRejectedState(true);
        }
    }, []);

    const onClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        setImageUrl(undefined);
    };

    const options: any = {
        minSize: 0,
        maxSize: 1000000,
        accept: ['image/gif', 'image/jpeg', 'image/png', 'image/jpg'],
        noClick: true,
        onDrop: onDrop,
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone(options);
    const props: OptionMainProps = {
        rootProps: getRootProps(),
        inputProps: getInputProps(),
        isDragActive: isDragActive,
        isRejected: isRejected,
        imageUrl: imageUrl,
        onClickDelete: onClickDelete,
    };

    return <OptionsMain {...props} />;
};
