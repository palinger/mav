import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import Grid from 'material-ui/Grid';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: '1',
        maxWidth: '700px',
        margin: '0 auto'
    },
    formControl: {
        width:'100% '
    },
    formControlFullWidth: {
        display: 'block'
    },
    inputLabelFocused: {
        color: theme.palette.primary,
    },
    inputUnderline: {
        '&:after': {
            backgroundColor: theme.palette.primary,
        },
    },
    autoCompleteLabel: {
        transform: 'translate(0, 1.5px) scale(0.75)',
        transformOrigin: 'top left',
        color: theme.palette.primary
    },
    block: {
        width: '100%'
    },
    textareaFixer: {
        width: '100%',
        border:'none',
        borderBottom: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.42)',
        fontSize: '16px',
        backgroundColor: 'transparent',
        padding:'20px 0px 7px',
        height: '120px'
    },
    button: {
        margin: theme.spacing.unit,
    },
    accent: {
        backgroundColor: 'rgba(0, 0, 0, 0.06)!important'
    }
});

class FullForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: 'London, UK' };
        this.onChange = (address) => this.setState({ address })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error))
    };

    render() {
        const {classes} = this.props;
        const fromInputProps = {
            value: this.state.address,
            onChange: this.onChange,
        };
        const autoCompleteStyles = {
            root: { bottom: '-12px' },
            input: { width: '100%' , border:'none', borderBottom: '1px solid', borderColor: 'rgba(0, 0, 0, 0.42)', fontSize: '16px', backgroundColor: 'transparent', padding:'10px 0px 7px' },
            autocompleteContainer: { backgroundColor: 'white' , zIndex:'1'},
            autocompleteItem: { color: 'black', backgroundColor: 'white' },
            autocompleteItemActive: { color: '#ff8f00', backgroundColor: 'white' }
        };
        const today = new Date();
        return (
            <form onSubmit={this.handleFormSubmit} className={classes.container}>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="name"
                            >
                                Name
                            </InputLabel>
                            <Input
                                classes={{
                                    underline: classes.inputUnderline,
                                }}
                                id="name"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl  className={classes.formControl}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="surname"
                            >
                                Surname
                            </InputLabel>
                            <Input
                                classes={{
                                    underline: classes.inputUnderline,
                                }}
                                id="surname"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="email"
                            >
                                Email
                            </InputLabel>
                            <Input
                                classes={{
                                    underline: classes.inputUnderline,
                                }}
                                id="email"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl  className={classes.formControl}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="phone"
                            >
                                Phone number
                            </InputLabel>
                            <Input
                                type="phone"
                                classes={{
                                    underline: classes.inputUnderline,
                                }}
                                id="phone"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.accent}>
                        <FormControl  className={classes.formControl}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="people"
                            >
                                People
                            </InputLabel>
                            <Input
                                type="number"
                                classes={{
                                    underline: classes.inputUnderline,
                                }}
                                id="people"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.accent}>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="dade"
                            >
                                Pick up Date
                            </InputLabel>
                            <Input
                                value="2018-04-04"
                                type="date"
                                classes={{
                                    underline: classes.inputUnderline,
                                }}
                                id="date"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.accent}>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="time"
                            >
                                Pick up time
                            </InputLabel>
                            <Input
                                value="13:00"
                                type="time"
                                classes={{
                                    underline: classes.inputUnderline,
                                }}
                                id="time"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={9} className={classes.accent}>
                        <FormControl className={[classes.formControl, classes.formControlFullWidth].join(' ')}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused,
                                    root: classes.autoCompleteLabel
                                }}
                                htmlFor="fromAddress"
                            >
                                Pick up address
                            </InputLabel>
                            <PlacesAutocomplete id="fromAddress" inputProps={fromInputProps} styles={autoCompleteStyles}/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.accent}>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused
                                }}
                                htmlFor="fromFloor"
                            >
                                Pick up floor
                            </InputLabel>
                            <Input
                                classes={{
                                    underline: classes.inputUnderline,
                                }}
                                id="fromFloor"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.accent}>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="fromlift"
                            >
                                Pick up lift
                            </InputLabel>
                            <Input
                                classes={{
                                    underline: classes.inputUnderline,
                                }}
                                id="fromLift"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.accent}>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused
                                }}
                                htmlFor="fromParking"
                            >
                                Pick up parking
                            </InputLabel>
                            <Input
                                classes={{
                                    underline: classes.inputUnderline,
                                }}
                                id="fromParking"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={9} className={classes.accent}>
                        <FormControl className={[classes.formControl, classes.formControlFullWidth].join(' ')}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused,
                                    root: classes.autoCompleteLabel
                                }}
                                htmlFor="toAddress"
                            >
                                Delivery Address
                            </InputLabel>
                            <PlacesAutocomplete id="toAddress" inputProps={fromInputProps} styles={autoCompleteStyles}/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.accent}>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused
                                }}
                                htmlFor="toFloor"
                            >
                                Delivery floor
                            </InputLabel>
                            <Input
                                classes={{
                                    underline: classes.inputUnderline,
                                }}
                                id="toFloor"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.accent}>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused,
                                }}
                                htmlFor="tolift"
                            >
                                Delivery lift
                            </InputLabel>
                            <Input
                                classes={{
                                    underline: classes.inputUnderline,
                                }}
                                id="toLift"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.accent}>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused
                                }}
                                htmlFor="toParking"
                            >
                                Delivery parking
                            </InputLabel>
                            <Input
                                classes={{
                                    underline: classes.inputUnderline,
                                }}
                                id="toParking"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused
                                }}
                                htmlFor="boxes"
                            >
                                No. of boxes
                            </InputLabel>
                            <Input
                                type="number"
                                classes={{
                                    underline: classes.inputUnderline,
                                }}
                                id="boxes"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused
                                }}
                                htmlFor="furnitureNumber"
                            >
                                No. of furniture
                            </InputLabel>
                            <Input
                                type="number"
                                classes={{
                                    underline: classes.inputUnderline,
                                }}
                                id="furnitureNumber"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl className={[classes.formControl, classes.formControlFullWidth].join(' ')}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused,
                                    root: classes.autoCompleteLabel
                                }}
                                htmlFor="furniture"
                            >
                                List your furniture here
                            </InputLabel>
                            <textarea
                                className={classes.textareaFixer}
                                placeholder="none"
                                classes={{
                                    underline: classes.inputUnderline,
                                    root: classes.block
                                }}
                                id="furniture"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl className={[classes.formControl, classes.formControlFullWidth].join(' ')}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused,
                                    root: classes.autoCompleteLabel
                                }}
                                htmlFor="misc"
                            >
                                List your miscellaneous items here
                            </InputLabel>
                            <textarea
                                className={classes.textareaFixer}
                                placeholder="none"
                                classes={{
                                    underline: classes.inputUnderline,
                                    root: classes.block
                                }}
                                id="misc"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} style={{textAlign :'right'}}>
                        <Button
                            color="primary"
                            type="submit"
                            variant="raised"
                            className={classes.button}>
                        Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        )
    }

}
FullForm.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FullForm);
