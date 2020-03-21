import * as React from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

type DropAreaInsideProps = {
    className: string;
    imageUrl: string;
    text: string;
};

export type DropAreaProps = {
    className: string;
    options: DropzoneOptions;
    isRejected: boolean;
    imageUrl: string;
};

const DropAreaInside = (props: DropAreaInsideProps) => {
    const { className, text, imageUrl } = props;
    return (
        <div className={`drop-area__input__inside ${className}`}>
            <div className="drop-area__input__inside__images">
                {imageUrl ? (
                    <img className="drop-area__input__inside__images__load-image" src={imageUrl} />
                ) : (
                    <>
                        <div className="drop-area__input__inside__images__jpg"></div>
                        <div className="drop-area__input__inside__images__png"></div>
                        <div className="drop-area__input__inside__images__gif"></div>
                    </>
                )}
            </div>
            <p className="drop-area__input__inside__text">{text}</p>
        </div>
    );
};

export const DropArea = (props: DropAreaProps) => {
    const { className, options, isRejected, imageUrl } = props;
    const { getRootProps, getInputProps, isDragActive } = useDropzone(options);

    return (
        <div className={`drop-area ${className}`} {...getRootProps()}>
            <input className="drop-area__input" {...getInputProps()} />
            {isDragActive ? (
                <DropAreaInside
                    className={'drop-area__input__inside--active'}
                    imageUrl={imageUrl}
                    text="ここに画像をドロップします"
                />
            ) : (
                <DropAreaInside
                    className={`${isRejected ? ' drop-area__input__inside--rejected' : ''}`}
                    imageUrl={imageUrl}
                    text={`${isRejected ? '無効なファイルです' : 'ここに画像をドラッグします'}`}
                />
            )}
        </div>
    );
};
