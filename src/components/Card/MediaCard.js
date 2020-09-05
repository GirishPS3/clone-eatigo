import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

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
    height: 175,
    transform: 'scale(1, 1)',
    transition: '0.3s',

    '&:hover': {
      transform: 'scale(1.08, 1.1)'
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
        />
        }
        {heading && <CardContent>
          <Typography component="h6" >
            <GridContainer spacing={2} direction='row' >
              <GridItem xs={10}>
                {heading}
              </GridItem>
              <GridItem xs={2}>
                <img className={classes.voucher} src={require('../../assets/img/gift_voucher.svg')} alt="" />
              </GridItem>
            </GridContainer>
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            <GridContainer spacing={2} direction='row' >
              <GridItem xs={7}>
                <Typography >Bellandur</Typography>
              </GridItem>
              <GridItem xs={5}>
                <img width='20px' height='20px' src={require('../../assets/img/colored_rupee.svg')} alt="" />
                <img width='20px' height='20px' src={require('../../assets/img/colored_rupee.svg')} alt="" />
                <img width='20px' height='20px' src={require('../../assets/img/colored_rupee.svg')} alt="" />
                <img width='20px' height='20px' src={require('../../assets/img/rupee.svg')} alt="" />
                <img width='20px' height='20px' src={require('../../assets/img/rupee.svg')} alt="" />
              </GridItem>
            </GridContainer>
          </Typography>
        </CardContent>}
      </CardActionArea>
    </Card>
  );
}