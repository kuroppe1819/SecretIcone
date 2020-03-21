import * as React from 'react';
import { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';
import { DropArea } from './DropArea';

export type OptionMainProps = {
    rootProps: DropzoneRootProps;
    inputProps: DropzoneInputProps;
    isDragActive: boolean;
    isRejected: boolean;
    imageUrl: string;
};

export const OptionsMain = (props: OptionMainProps) => {
    const { rootProps, inputProps } = props;
    return (
        <div className="options-main">
            <DropArea className={'options-main-drop-area'} {...props} />
            <div className="options-main__user-select">
                <label className="options-main__user-select-upload" {...rootProps}>
                    参照
                    <input {...inputProps} />
                </label>
                <button className="options-main__user-select-delete">削除</button>
            </div>
        </div>
    );
};
