import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        maxWidth: 345,
        margin: '0 auto'
    },
    media: {
        height: 200,
    },
    price: {
        position: 'absolute',
        top: '-24px',
        right: '-16px'
    },
    relative: {
        position: 'relative'
    }
};

function SimpleMediaCard(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="http://www.sawyerrpetersremovals.co.uk/wp-content/uploads/2015/02/torquay-home-removal-men.jpg"
                    title={props.imgTitle}
                />
                <CardContent className={classes.relative}>
                    <Button className={classes.price} size="large" variant='raised' color="primary">
                        {props.price}
                    </Button>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.title}
                    </Typography>
                    <Typography component="p">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions style={{ justifyContent:"flex-end"}}>
                    <Link to="/contact">
                        <Button size="small" color="primary">
                            contact
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
