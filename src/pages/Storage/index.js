import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import CardSide from '../../components/CardSide/index';
import Grid from 'material-ui/Grid';


class Storage extends Component {

    render(){
        return(
            <div>
                <Grid
                    container
                    spacing={24}
                    direction="column"
                >
                    <Grid item xs={12}>
                        <Typography variant="display1" color='inherit' gutterBottom>
                            Packing options
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSide
                            title="One man and a van"
                            subtitle="Suitable for small move"
                            imgTitle="One man and a van"

                        />

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSide
                            title="Two men and a van"
                            subtitle="Suitable for medium size move"
                            imgTitle="Two men and a van"

                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSide
                            title="Three men and a van"
                            subtitle="Ideal for large move"
                            imgTitle="Three men and a van"

                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSide
                            title="Three men and a truck"
                            description="Ideal for very large move"
                            imgTitle="Three men and a truck"

                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Storage;
