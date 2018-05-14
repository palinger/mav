import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { MenuList, MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import LocalShippingIcon from 'material-ui-icons/LocalShipping';
import ContactIcon from 'material-ui-icons/ContactMail';
import MonetizationOnIcon from 'material-ui-icons/MonetizationOn';
import StoreIcon from 'material-ui-icons/Store';
import PackIcon from 'material-ui-icons/Dashboard';
import { Link } from 'react-router-dom';

const styles = theme => ({
    menuItem: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    primary: {},
    icon: {},
    link:{
        textDecoration: 'none'
    }
});


class SideNav extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <MenuList>
                <Link className={classes.link} to="/">
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <LocalShippingIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Home" />
                    </MenuItem>
                </Link>
                <Link className={classes.link} to="/pricing">
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <MonetizationOnIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Pricing" />
                    </MenuItem>
                </Link>
                <Link className={classes.link} to="/packing">
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <PackIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Packing" />
                    </MenuItem>
                </Link>
                <Link className={classes.link} to="/storage">
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <StoreIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Storage" />
                    </MenuItem>
                </Link>
                <Link className={classes.link} to="/contact">
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>

                            <ContactIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Contact" />
                    </MenuItem>
                </Link>
            </MenuList>
        );
    }
}

SideNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNav);
