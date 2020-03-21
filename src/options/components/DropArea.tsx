import * as React from 'react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

type Props = {
    className: string;
};

export const DropArea = (props: Props) => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone(onDrop);

    return (
        <div className={`drop-area ${props.className}`} {...getRootProps()}>
            <input className="drop-area__input" {...getInputProps()} />
            {isDragActive ? <p>ドラッグ中</p> : <p>ここにファイルをドロップしてくれ</p>}
        </div>
    );
};
