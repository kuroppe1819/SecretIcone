import * as React from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

type DropAreaInsideProps = {
    className: string;
    text: string;
};

export type DropAreaProps = {
    className: string;
    options: DropzoneOptions;
    isRejected: boolean;
};

const DropAreaInside = (props: DropAreaInsideProps) => {
    const { className, text } = props;
    return (
        // <div className="drop-area__input__inside drop-area__input__inside--drag-active">
        <div className={className}>
            <div className="drop-area__input__inside__sample-images">
                <div className="drop-area__input__inside__sample-images__jpg"></div>
                <div className="drop-area__input__inside__sample-images__png"></div>
                <div className="drop-area__input__inside__sample-images__gif"></div>
            </div>
            <p className="drop-area__input__inside__text">{text}</p>
        </div>
    );
};

export const DropArea = (props: DropAreaProps) => {
    const { className, options, isRejected } = props;
    const { getRootProps, getInputProps, isDragActive } = useDropzone(options);

    return (
        <div className={`drop-area ${className}`} {...getRootProps()}>
            <input className="drop-area__input" {...getInputProps()} />
            {isDragActive ? (
                <DropAreaInside
                    className={'drop-area__input__inside drop-area__input__inside--drag-active'}
                    text="ここに画像をドロップします"
                />
            ) : (
                <DropAreaInside
                    className={`drop-area__input__inside${isRejected ? ' drop-area_input__inside--rejected' : ''}`}
                    text={`${isRejected ? '無効なファイルです' : 'ここに画像をドラッグします'}`}
                />
            )}
        </div>
    );
};
