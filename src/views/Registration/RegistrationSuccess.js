import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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

export default function RegistrationSucces(props) {
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
                  
                  <img widthg='50%' height='100px' src={require('../../assets/img/mail_sent.svg')} alt=""/>
                  <br/>
                  <br/>
              </GridItem>
              <GridItem>
              <Typography simple variant="h3"><ThumbUpIcon style={{fontSize: '40px', color: '#60f7a9'}}/>Thank You For Registering with Us!! </Typography>
              <br/>
                  <Divider />
                  <br/>
                  
                  <Typography simple variant='h5'>we have sent an activation mail to your registered mail. Please click on the link to activate your account. </Typography>
                  <Typography simple variant='h6'>Happy Booking!!</Typography>
              </GridItem>
          </GridContainer>

      </div>
    </div>
  );
}
