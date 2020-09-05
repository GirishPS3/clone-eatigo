import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Divider from '@material-ui/core/Divider';
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import TabPanel from "../../components/TabPanel/TabPanel.js";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function RegistrationActivation(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
      classNames={classes.Header}
        color="primary"
        routes={dashboardRoutes}
        brand="Logo"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <div style={{margin: '120px 50px 50px 50px', textAlign:'center'}}>
          <GridContainer justify="center" alignItems="center">
              <GridItem xs={12}>
                  
                  <img width='60%' height='150px' src={require('../../assets/img/confirm.svg')} alt=""/>
                  <br/>
                  <br/>
              </GridItem>
              <GridItem>
              <Typography simple variant="h3"><ThumbUpIcon style={{fontSize: '40px', color: '#60f7a9'}}/>You Have Successfully Activated Your Account!! </Typography>
              <br/>
                  <Divider />
                  <br/>
                  <Typography simple variant='h6'>TO Explore More Offers</Typography>
              </GridItem>
            <GridItem>
                <Button color='primary' large><Link className={classes.ButtonLink} to='/'>Go To Home Page</Link></Button>
            </GridItem>
          </GridContainer>

      </div>
    </div>
  );
}
