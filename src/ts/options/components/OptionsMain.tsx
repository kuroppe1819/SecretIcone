import * as React from 'react';
import { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';
import { DropArea } from './DropArea';

export type OptionMainProps = {
    rootProps: DropzoneRootProps;
    inputProps: DropzoneInputProps;
    isDragActive: boolean;
    isRejected: boolean;
    imageUrl: string;
    dropAreaText: string;
    onClickDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const OptionsMain = (props: OptionMainProps) => {
    const { rootProps, inputProps, onClickDelete } = props;
    return (
        <div className="options-main">
            <h1 className="option-main-title">SecretIcone Setting</h1>
            <DropArea className={'options-main-drop-area'} {...props} />
            <div className="options-main__user-select">
                <label className="options-main__user-select-upload" {...rootProps}>
                    参照
                    <input {...inputProps} />
                </label>
                <button className="options-main__user-select-delete" onClick={onClickDelete}>
                    削除
                </button>
            </div>
        </div>
    );
};
