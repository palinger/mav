import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3
    }
});

class ServiceGuarantee extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.root}>
                <div><p></p>
                    <h2>Our Service</h2>
                    <p><strong>To give customers strong service assurances Man and Vans have drawn up the following service guarantees. If existing customers believe that we have not lived up to the assurances written below please call us and we will chat through with you and compensate where agreed.</strong></p>
                    <ol>
                        <li>We will only charge you from the time when the first box is picked up until the last box is unloaded.</li>
                        <li>If your job is quoted on a fixed fee we will give you the breakdown of the quote. That way you will be able to see the logic behind the price.</li>
                        <li>No hidden costs – we will not charge you for the travel costs that we incur. The congestion charge, petrol costs and travel times are included in the quote that we give to you.</li>
                        <li>The service that you receive will always be personal – you will be given the name and phone number of your driver so that you can contact him directly to discuss any issues that may be pertinent.</li>
                        <li>In order to ensure that your move goes as smoothly as possible we will ask you to fill in a <a href="/contact">Customer Details Form</a> which if filled in fully gives us all the details that we need to get the move done as efficiently as possible. By getting all the intricacies down before the job we militate against problems on the day.</li>
                        <li>We do not charge a fee for rearranging your move. We understand the difficulties that can occur when you are moving and at all stages will endeavour to ensure that things run as smoothly as possible.</li>
                    </ol>
                    <p>If any customer feels that we have not followed through on any of these guarantees on any job please let us know and we will work to resolve any issues you still have.<br/>
                    </p></div>
            </Paper>
        );
    }
}
ServiceGuarantee.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServiceGuarantee);