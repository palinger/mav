import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Home from '../../pages/Home/index';

const styles = theme =>({
    main: {
        flex: 1,
        padding: theme.spacing.unit *2,
        // backgroundColor: wfColors.greyDisabled
    }
});
class Main extends Component {
    render() {
        const { classes } = this.props;
        return(
            <main className={classes.main}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    {/*<Route exact path='/CaseDetails' component={Home}/>*/}
                </Switch>
            </main>
        )
    }
}

export default withStyles(styles)(Main);