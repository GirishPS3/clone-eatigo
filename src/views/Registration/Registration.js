import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Header from "../../components/Header/Header.js";
import styles from "../../assets/jss/material-kit-react/views/RegistrationPage.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import APP_CONSTANT from '../../constants'
import regImage from "../../assets/img/login1.jpeg";
import Hidden from "@material-ui/core/Hidden";

class RegisterUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      confirm_email: '',
      phonetic1: '',
      Phonetic2: '',
      password: '',
      confirmPassword: '',
      mobile: '',
      address: '',
      mailDelivery: 'not_want'
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    this.setState({[`${event.target.name}_error`] : event.target.value ? false: true});
  };
  registerUser = (e) => {
    e.preventDefault();
    let newArr = [];
    let arrObj = {};
    Object.entries(this.state).map(obj=>{
        !obj[1] && newArr.push([`${obj[0]}_error`, true]);
    });
    arrObj = Object.fromEntries(newArr);
    console.log(newArr);
    this.setState(arrObj);
  }
  render() {
    const {classes} = this.props;
    const {SignUp, EmailAddress, Password, confirmPassword} = APP_CONSTANT.APP_CONSTANTS.SignUp;
    const { ...rest } = this.props;
  return (
    <div className={classes.root}>
      <Header
      classNames={classes.Header}
        color="primary"
        brand="Logo"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      
      <Grid container component="main" >
        <CssBaseline />
        <Grid item  sm={4} md={6} className={classes.image} >
        <Hidden smDown implementation="css">
          <img src={regImage} className={classes.imageWidth} alt=""/>
        </Hidden>
          </Grid>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {SignUp}
          </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    
                    error={this.state.firstName_error}
                    helperText={this.state.firstName_error && 'please fill the field'}
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    
                    required
                    fullWidth
                    error={this.state.lastName_error}
                    helperText={this.state.lastName_error && 'please fill the field'}
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    value={this.state.lastName}
                    onChange={this.handleChange}

                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    
                    required
                    fullWidth
                    error={this.state.phonetic1_error}
                    helperText={this.state.phonetic1_error && 'please fill the field'}
                    value={this.state.phonetic1}
                    id="Phonetic1"
                    label="Phonetic 1"
                    name="phonetic1"
                    autoComplete="email"
                    onChange={this.handleChange}

                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    
                    required
                    fullWidth
                    error={this.state.Phonetic2_error}
                    helperText={this.state.Phonetic2_error && 'please fill the field'}
                    value={this.state.Phonetic2}
                    id="Phonetic2"
                    label="Phonetic 2"
                    name="Phonetic2"
                    autoComplete="email"
                    onChange={this.handleChange}

                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    
                    required
                    fullWidth
                    error={this.state.email_error}
                    helperText={this.state.email_error && 'please fill the field'}
                    value={this.state.email}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={this.handleChange}

                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    
                    required
                    fullWidth
                    error={this.state.confirm_email_error}
                    helperText={this.state.confirm_email_error ? 'please fill the field' : ""}
                    id="confirm_email"
                    label="Confirm Email Address"
                    name="confirm_email"
                    autoComplete="email"
                    onChange={this.handleChange}
                    value={this.state.confirm_email}
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    
                    required
                    fullWidth
                    error={this.state.mobile_error}
                    helperText={this.state.mobile_error && 'please fill the field'}
                    id="Mobile-Number"
                    value={this.state.mobile}
                    label="Mobile Number"
                    name="mobile"
                    autoComplete="mobile"
                    onChange={this.handleChange}

                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    
                    required
                    error={this.state.address_error}
                    helperText={this.state.address_error && 'please fill the field'}
                    fullWidth
                    value={this.state.address}
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="address"
                    onChange={this.handleChange}

                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    
                    required
                    fullWidth
                    error={this.state.password_error}
                    helperText={this.state.password_error ? 'please fill the field': 'password should be between 8 to 16 characters' }
                    value={this.state.password}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    inputProps={{ minLength: 8 }}
                    autoComplete="current-password"
                    onChange={this.handleChange}

                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    
                    required
                    fullWidth
                    error={this.state.confirmPassword_error}
                    helperText={this.state.confirmPassword_error && 'please fill the field'}
                    value={this.state.confirmPassword}
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirm-password"
                    autoComplete="current-password"
                    onChange={this.handleChange}

                  />
                </Grid>
                <Grid item xs={12} >
                  <FormLabel component="legend">ANA/JAL Shareholder Benefit Number Discount emails such as discount information for sales centers</FormLabel>
                  <RadioGroup className={classes.radioButton} aria-label="quiz" name="quiz" value={this.state.mailDelivery} onChange={this.handleRadioChange}>
                    <FormControlLabel value="Hope" control={<Radio />} label="Hope" />
                    <FormControlLabel value="not_want" control={<Radio />} label="Do Not Want" />
                  </RadioGroup>
                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick = {this.registerUser}
              >
                Sign Up
          </Button>
            </form>
          </div>
        </Grid>
      </Grid>
      </div>
    );
  }

}

export default withStyles( (theme) => ({
  ...styles(theme)
}),
{ withTheme: true },)(RegisterUser);