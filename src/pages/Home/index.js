import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import homeBg from '../../assets/img/img1.jpeg'
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import CardHome from '../../components/CardHome';
import removalImage from '../../assets/img/shipping-boxes-in-front-of-red-brick_925x.jpg';
import packingImage from '../../assets/img/shipping-box_925x.jpg';
import storageImage from '../../assets/img/file000919939183.jpg';
import LocalShippingIcon from 'material-ui-icons/LocalShipping';
import PackIcon from 'material-ui-icons/Dashboard';
import StoreIcon from 'material-ui-icons/Store';
const styles = theme => ({
    bg: {
        padding: '180px 0 90px',
        backgroundImage: `url(${homeBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
    },
    paperLayout: {
        padding: theme.spacing.unit * 3,
    },
    gridLayout: {
        // padding: theme.spacing.unit * 3,
        maxWidth: '980px',
        margin: '0 auto'
    }
});
class Home extends Component {

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.bg}>
                <Grid container spacing={24} className={classes.gridLayout} >
                    <Grid item xs={12}>
                        <Paper className={classes.paperLayout}>
                            <Typography variant="display1" color='inherit' gutterBottom>
                                Welcome to MAV
                            </Typography>
                            <Typography variant="body1" color='inherit' gutterBottom>
                                Lorem ipsum dolor amet banjo crucifix marfa gluten-free roof party, pug vegan subway tile normcore schlitz jianbing wolf distillery yuccie. Hashtag pug salvia before they sold out, literally skateboard fanny pack. Swag jianbing succulents unicorn subway tile food truck gentrify cronut franzen fingerstache cold-pressed affogato. Next level asymmetrical mlkshk +1 blog butcher edison bulb dreamcatcher normcore.
                            </Typography>
                            <Typography variant="body1" color='inherit' gutterBottom>
                                Keffiyeh subway tile neutra lo-fi. Gastropub butcher try-hard tumblr church-key, pabst squid irony banjo heirloom direct trade sustainable vegan. Shoreditch pitchfork scenester jianbing snackwave farm-to-table put a bird on it. XOXO mustache dreamcatcher microdosing, normcore put a bird on it next level salvia ugh street art. Kogi squid VHS, bicycle rights offal art party readymade leggings portland shabby chic ennui asymmetrical chicharrones pour-over. Succulents pok pok pickled, whatever put a bird on it bushwick tofu freegan brunch occupy pour-over narwhal lumbersexual. Pok pok kombucha four dollar toast you probably haven't heard of them sustainable cornhole lo-fi normcore affogato retro tacos franzen small batch.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container spacing={24} className={classes.gridLayout} >
                    <Grid item xs={12} sm={4}>
                        <CardHome
                            title="Removal"
                            subheader="Man and van services"
                            image={removalImage}
                            imagetitle="Removal and man and van services"
                            linktext="Check pricing"
                            actionlink="/pricing"
                            avatar={<LocalShippingIcon/>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <CardHome
                            title="Packing"
                            subheader="Packing service or materials"
                            image={packingImage}
                            imagetitle="full packing service or just the materials"
                            linktext="Check packaging"
                            actionlink="/packing"
                            avatar={<PackIcon/>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <CardHome
                            title="Storage"
                            subheader="Short and long term options"
                            image={storageImage}
                            imagetitle="storage container"
                            linktext="Storage"
                            actionlink="/storage"
                            avatar={<StoreIcon/>}
                        />
                    </Grid>
                </Grid>

            </div>
        )
    }
}

export default withStyles(styles)(Home);
