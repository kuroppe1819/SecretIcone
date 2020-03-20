import * as React from 'react';
import { EuiButton, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';

export const OptionsMain = () => {
    return (
        <EuiFlexGroup gutterSize="s" alignItems="center">
            <EuiFlexItem grow={false}>
                <EuiButton>UPLOAD</EuiButton>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
                <EuiButton fill color="danger">
                    DELETE
                </EuiButton>
            </EuiFlexItem>
        </EuiFlexGroup>
    );
};
