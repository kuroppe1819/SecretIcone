import * as React from 'react';
import { DropzoneOptions } from 'react-dropzone';
import { DropArea } from './DropArea';

export type OptionMainProps = {
    options: DropzoneOptions;
    isRejected: boolean;
    imageUrl: string;
};

export const OptionsMain = (props: OptionMainProps) => {
    return (
        <div className="options-main">
            <DropArea className={'options-main-drop-area'} {...props} />
            <div className="options-main__user-select">
                <button className="options-main__user-select-upload">参照</button>
                <button className="options-main__user-select-delete">削除</button>
            </div>
        </div>
    );
};
