import * as React from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

export type DropAreaProps = {
    className: string;
    options: DropzoneOptions;
};

export const DropArea = (props: DropAreaProps) => {
    const { className, options } = props;
    const { getRootProps, getInputProps, isDragActive } = useDropzone(options);

    return (
        <div className={`drop-area ${className}`} {...getRootProps()}>
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
