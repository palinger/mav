import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import ContactFormsHolder from '../../components/ContactFormsHolder/index'
import { withStyles } from 'material-ui/styles';
import contactBg from '../../assets/img/contact.jpg'
const styles = theme => ({
    bg: {
        padding: '180px 0 90px',
        backgroundImage: `url(${contactBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
    }
});

class Contact extends Component {

    render(){
        const {classes} = this.props;

        return(
            <div className={classes.bg}>
                <ContactFormsHolder />
            </div>
        )
    }
}

export default withStyles(styles)(Contact);
