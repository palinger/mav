import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import ContactFormsHolder from '../../components/ContactFormsHolder/index'


class Contact extends Component {

    render(){
        return(
            <div>
                <Typography variant="display1" color='inherit' gutterBottom>
                    Contact
                </Typography>
                <ContactFormsHolder />
            </div>
        )
    }
}

export default Contact;
