import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: '100%',
  },
  voucher: {
    position: 'absolute',
    top: '-7px',
    right: 0
  },
  media: {
    height: 140,
    transform: 'scale(1, 1)',
    transition: '0.4s',

    '&:hover': {
      transform: 'scale(1.2, 1.1)'
    }
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const { heading, img, number, route } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={route}>
        {img && <CardMedia
          className={classes.media}
          image={img}
        />}
        {heading && <CardContent>
          <Typography variant="h6" >
                {heading}
          </Typography>
          <Typography>
              {number} Restaurants
          </Typography>
        </CardContent>}
      </CardActionArea>
    </Card>
  );
}