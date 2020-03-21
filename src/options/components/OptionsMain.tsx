import * as React from 'react';
import { DropArea } from './DropArea';

export const OptionsMain = () => {
    return (
        <div className="option-main">
            <DropArea />
            <div className="option-main__user-select">
                <button className="option-main__user-select-upload">UPLOAD</button>
                <button className="option-main__user-select-delete">DELETE</button>
            </div>
        </div>
    );
};
