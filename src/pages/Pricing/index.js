import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Card from '../../components/Card/index';
import Grid from 'material-ui/Grid';
class Pricing extends Component {

    render(){
        return(
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant="display1" color='inherit' gutterBottom>
                        Pricing
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card
                            title="One man and a van"
                            description="Suitable for small move"
                            imgTitle="One man and a van"
                            price="£40"
                        />

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card
                            title="Two men and a van"
                            description="Suitable for medium size move"
                            imgTitle="Two men and a van"
                            price="£55"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card
                            title="Three men and a van"
                            description="Ideal for large move"
                            imgTitle="Three men and a van"
                            price="£70"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card
                            title="Three men and a truck"
                            description="Ideal for very large move"
                            imgTitle="Three men and a truck"
                            price="£120"
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Pricing;
