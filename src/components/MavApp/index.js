import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Header from '../../common/Header/index';
import Main from '../../common/Main/index';
import Footer from '../../common/Footer/index';

const styles = theme => ({
    columnLayout: {
        display: 'flex',
        flexDirection: 'column'
    }
});

class MavApp extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.columnLayout}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default withStyles(styles)(MavApp);
