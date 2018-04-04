import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';
import { MavTheme } from './common/MavTheme';
import { BrowserRouter } from 'react-router-dom';

import MavApp from './components/MavApp/index';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider theme={MavTheme}>
                    {console.log(MavTheme)}
                    <MavApp/>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;
