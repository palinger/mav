import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import FullForm from '../FullForm/index'
import FreeTextForm from '../FreeTextForm/index'

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: "100%",
    },
    paperLayout: {
        padding: theme.spacing.unit * 3,
        maxWidth: '980px',
        margin: '0 auto'
    },
    bottomPadding: {
        paddingBottom: theme.spacing.unit * 3
    },
    fullWidthTab: {
        flex: 1,
        maxWidth: 'none',
    },
});

class ContactFormsHolder extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <Paper className={classes.paperLayout}>
                <Typography variant="title" color="inherit" gutterBottom>
                    Contact Form
                </Typography>
                <Typography variant="body1" color="inherit" className={classes.bottomPadding}>
                    Lorem ipsum dolor amet four loko shoreditch snackwave synth, kickstarter dreamcatcher tilde intelligentsia vexillologist succulents. Flannel prism pour-over, tumeric mumblecore four dollar toast +1 helvetica shabby chic affogato flexitarian copper mug. Pour-over tumeric messenger bag sustainable four dollar toast umami raclette shaman small batch vinyl stumptown before they sold out mustache fingerstache art party. 3 wolf moon direct trade forage, hoodie man bun deep v cloud bread air plant synth kogi echo park fixie vinyl. Aesthetic bushwick pinterest paleo fingerstache. IPhone asymmetrical keffiyeh next level banh mi prism YOLO gastropub four dollar toast art party vape authentic brunch man bun tousled.
                </Typography>

            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab className={classes.fullWidthTab} label="Detailed Form" />
                        <Tab className={classes.fullWidthTab} label="In Your Own Words" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}><FullForm /></TabContainer>
                    <TabContainer dir={theme.direction}><FreeTextForm /></TabContainer>
                </SwipeableViews>
            </div>
            </Paper>
        );
    }
}

ContactFormsHolder.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ContactFormsHolder);
