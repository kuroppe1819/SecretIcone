import * as React from 'react';
import { DropArea } from './DropArea';

export const OptionsMain = () => {
    return (
        <div className="options-main">
            <DropArea className={'options-main-drop-area'} />
            <div className="options-main__user-select">
                <button className="options-main__user-select-upload">参照</button>
                <button className="options-main__user-select-delete">削除</button>
            </div>
        </div>
    );
};
