import * as React from 'react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

type Props = {
    className: string;
};

export const DropArea = (props: Props) => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles);
    }, []);
    const onDropObj: any = { onDrop: onDrop };
    const { getRootProps, getInputProps, isDragActive } = useDropzone(onDropObj);

    return (
        <div className={`drop-area ${props.className}`} {...getRootProps()}>
            <input className="drop-area__input" {...getInputProps()} />
            {isDragActive ? (
                <div className="drop-area__input__inside">
                    <div className="drop-area__input__inside__sample-images">
                        <div className="drop-area__input__inside__sample-images__jpg"></div>
                        <div className="drop-area__input__inside__sample-images__png"></div>
                        <div className="drop-area__input__inside__sample-images__gif"></div>
                    </div>
                    <p className="drop-area__input__inside__text">ここに画像をドロップします</p>
                </div>
            ) : (
                <div className="drop-area__input__inside drop-area__input__inside--non-active">
                    <div className="drop-area__input__inside__sample-images">
                        <div className="drop-area__input__inside__sample-images__jpg"></div>
                        <div className="drop-area__input__inside__sample-images__png"></div>
                        <div className="drop-area__input__inside__sample-images__gif"></div>
                    </div>
                    <p className="drop-area__input__inside__text">ここに画像をドラッグします</p>
                </div>
            )}
        </div>
    );
};
