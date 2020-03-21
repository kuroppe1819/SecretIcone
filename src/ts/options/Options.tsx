import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { OptionsContainer } from './OptionsContainer';
import { StorageAccess } from '../lib/StorageAccess';
(async () => {
    const initImageUrl = await StorageAccess.getImageUrl();
    ReactDOM.render(<OptionsContainer initImageUrl={initImageUrl} />, document.getElementById('options'));
})();
