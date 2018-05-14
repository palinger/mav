import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Home from '../../pages/Home/index';
import Contact from '../../pages/Contact/index';
import Pricing from '../../pages/Pricing/index';
import Packing from '../../pages/Packing/index';
import Storage from '../../pages/Storage/index';
import Terms from '../../pages/Terms/index';
import ServiceGuarantee from '../../pages/Service/index';

const styles = theme =>({
    main: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
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
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/pricing' component={Pricing}/>
                    <Route exact path='/packing' component={Packing}/>
                    <Route exact path='/storage' component={Storage}/>
                    <Route exact path='/terms' component={Terms}/>
                    <Route exact path='/serviceGuarantee' component={ServiceGuarantee}/>
                </Switch>
            </main>
        )
    }
}

export default withStyles(styles)(Main);