import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { OptionsMain, OptionMainProps } from './components/OptionsMain';
import { DropEvent, useDropzone } from 'react-dropzone';
import { StorageAccess } from '../lib/StorageAccess';

enum DropAreaText {
    DROP_INVALID_FILES = 'このファイルは無効です',
    DROP_MULTIPLE_FILES = '複数のファイルをドロップできません',
    DRAG_HERE = 'ここに画像をドラッグします',
    DRAG_ACTIVE = 'ここに画像をドロップします',
}

export type OptionsContainerProps = {
    initImageUrl: string | null;
};

export const OptionsContainer = (props: OptionsContainerProps) => {
    const [isRejected, setIsRejected] = useState(false);
    const [imageUrl, setImageUrl] = useState(props.initImageUrl);
    const [dropAreaText, setDropAreaText] = useState(DropAreaText.DRAG_HERE);

    const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: File[], event: DropEvent) => {
        if (rejectedFiles.length > 0) {
            setIsRejected(true);
            setDropAreaText(DropAreaText.DROP_INVALID_FILES);
            return;
        }

        if (acceptedFiles.length !== 1) {
            setIsRejected(true);
            setDropAreaText(DropAreaText.DROP_MULTIPLE_FILES);
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setImageUrl(reader.result.toString());
            setIsRejected(false);
            setDropAreaText(DropAreaText.DRAG_HERE);
        };
        reader.readAsDataURL(acceptedFiles[0]);
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

    useEffect(() => {
        if (isDragActive) {
            setDropAreaText(DropAreaText.DRAG_ACTIVE);
        }
    }, [isDragActive]);

    const optionsMainProps: OptionMainProps = {
        rootProps: getRootProps(),
        inputProps: getInputProps(),
        isDragActive: isDragActive,
        isRejected: isRejected,
        imageUrl: imageUrl,
        onClickDelete: onClickDelete,
        dropAreaText: dropAreaText,
    };

    return <OptionsMain {...optionsMainProps} />;
};
