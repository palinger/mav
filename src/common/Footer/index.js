import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme =>({
    footer: {
        backgroundColor: theme.palette.secondary.main,
        padding: theme.spacing.unit *2 + 'px',
    }
});

class Footer extends Component {
    render(){
        const { classes } = this.props;

        return(
            <footer className={classes.footer}>
                <p>Footer</p>
            </footer>
        )
    }
}

export default withStyles(styles)(Footer);