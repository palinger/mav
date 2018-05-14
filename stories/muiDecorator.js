import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// We import our apps theme file
import MavTheme from '../src/common/MavTheme';

const muiDecorator = (story) => (
    <MuiThemeProvider theme={MavTheme} >
        {story()}
    </MuiThemeProvider>
);

export default muiDecorator;