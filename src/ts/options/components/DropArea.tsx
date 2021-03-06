import * as React from 'react';
import { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';

type DropAreaInsideProps = {
    className: string;
    imageUrl: string;
    text: string;
};

export type DropAreaProps = {
    className: string;
    rootProps: DropzoneRootProps;
    inputProps: DropzoneInputProps;
    isDragActive: boolean;
    isRejected: boolean;
    imageUrl: string;
    dropAreaText: string;
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
                        <div className="drop-area__input__inside__images__svg"></div>
                    </>
                )}
            </div>
            <p className="drop-area__input__inside__text">{text}</p>
        </div>
    );
};

export const DropArea = (props: DropAreaProps) => {
    const { className, rootProps, inputProps, isDragActive, isRejected, imageUrl, dropAreaText } = props;

    return (
        <div className={`drop-area ${className}`} {...rootProps}>
            <input className="drop-area__input" {...inputProps} />
            {isDragActive ? (
                <DropAreaInside
                    className={'drop-area__input__inside--active'}
                    imageUrl={imageUrl}
                    text={dropAreaText}
                />
            ) : (
                <DropAreaInside
                    className={`${isRejected ? 'drop-area__input__inside--rejected' : ''}`}
                    imageUrl={imageUrl}
                    text={dropAreaText}
                />
            )}
        </div>
    );
};
