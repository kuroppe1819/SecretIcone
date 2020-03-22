import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { OptionsMain, OptionMainProps } from './components/OptionsMain';
import { DropEvent, useDropzone } from 'react-dropzone';
import { StorageAccess } from '../lib/StorageAccess';

export type OptionsContainerProps = {
    initImageUrl: string | null;
};

export const OptionsContainer = (props: OptionsContainerProps) => {
    const [isRejected, isRejectedState] = useState(false);
    const [imageUrl, setImageUrl] = useState(props.initImageUrl);

    const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: File[], event: DropEvent) => {
        if (acceptedFiles.length === 1 && rejectedFiles.length === 0) {
            isRejectedState(false);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result.toString());
            };
            reader.readAsDataURL(acceptedFiles[0]);
        } else {
            isRejectedState(true);
        }
    }, []);

    const onClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        setImageUrl(null);
    };

    const options: any = {
        minSize: 0,
        maxSize: 5242880, // storageに保存できる最大容量。 sync: 102400 byte, local, 5242880 byte
        accept: ['image/gif', 'image/jpeg', 'image/png', 'image/jpg'],
        noClick: true,
        onDrop: onDrop,
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone(options);

    useEffect(() => {
        (async (): Promise<void> => {
            await StorageAccess.setImageUrl(imageUrl);
        })();
    }, [imageUrl]);

    const optionsMainProps: OptionMainProps = {
        rootProps: getRootProps(),
        inputProps: getInputProps(),
        isDragActive: isDragActive,
        isRejected: isRejected,
        imageUrl: imageUrl,
        onClickDelete: onClickDelete,
    };

    return <OptionsMain {...optionsMainProps} />;
};
