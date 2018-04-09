import { createMuiTheme } from 'material-ui';
// import { wfColors } from './wf-colors';

export const MavTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffc046',
            main: '#ff8f00',
            dark: '#c56000',
            contrastText: '#fff'
        },
        secondary: {
            light: '#a4a4a4',
            main: '#757575',
            dark: '#494949',
            contrastText: '#fff',
        }
    },
    typography: {
        // fontFamily: 'Favorit',
        headline: {
            fontWeight: 'bold'
        },
        subheading: {
            fontWeight: 'bold'
        },
        display1: {
            fontSize: '2rem',
            fontWeight: 'bold',
            // color: wfColors.textColor
        }
    },
    overrides: {
        MuiButton: {
            sizeSmall: {

                padding: '12px 8px',
            },
            label: {
                textTransform: 'capitalize',
                fontSize: '14px'
            }
        },
    }
});