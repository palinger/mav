import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import SideNav from '../SideNav/index';
import MainNav from '../MainNav';

const styles = {
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 250,
    }
};

class HeaderBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            left: false
        }
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon
                                onClick={this.toggleDrawer('left', true)}
                            />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            MaV
                        </Typography>

                        <MainNav/>

                    </Toolbar>
                    <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer('left', false)}
                            onKeyDown={this.toggleDrawer('left', false)}
                        >
                            <SideNav className={classes.list}/>
                        </div>
                    </Drawer>
                </AppBar>
            </div>
        );
    }
}
HeaderBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderBar);