import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
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
        margin: theme.spacing.unit,
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
    }
});
class FreeTextForm extends React.Component {
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
                    <Grid item xs={12}>
                        <FormControl className={[classes.formControl, classes.formControlFullWidth].join(' ')}>
                            <InputLabel
                                FormLabelClasses={{
                                    focused: classes.inputLabelFocused,
                                    root: classes.autoCompleteLabel
                                }}
                                htmlFor="freeText"
                            >
                                Say what you want here
                            </InputLabel>
                            <textarea
                                className={classes.textareaFixer}
                                placeholder="got nothing to say..."
                                classes={{
                                    underline: classes.inputUnderline,
                                    root: classes.block
                                }}
                                id="freeText"
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
FreeTextForm.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FreeTextForm);
