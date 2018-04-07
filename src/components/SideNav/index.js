import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { MenuList, MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
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
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Home" />
                    </MenuItem>
                </Link>
                <MenuItem className={classes.menuItem}>
                    <ListItemIcon className={classes.icon}>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary }} inset primary="Pricing" />
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    <ListItemIcon className={classes.icon}>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary }} inset primary="Packing" />
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    <ListItemIcon className={classes.icon}>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary }} inset primary="Storage" />
                </MenuItem>
                <Link className={classes.link} to="/contact">
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <InboxIcon />
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
