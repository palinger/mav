import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 560
    },
    link: {
        display: "inline",
        color: theme.palette.secondary.contrastText,
        margin: `0 ${theme.spacing.unit * 2 }px `
    }
});

function MainNav(props) {
    const { classes } = props;
    return (
        <nav className={classes.root}>
            <Link className={classes.link} to="/">
                Home
            </Link>
            <Link className={classes.link} to="/pricing" text="">
                Pricing
            </Link>
            <Link className={classes.link} to="/packing" text="" >
                Packaging
            </Link>
            <Link className={classes.link} to="/storage" text="">
                Storage
            </Link>
            <Link className={classes.link} to="/contact" text="">
                Contact
            </Link>
        </nav>
    );
}

MainNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainNav);
