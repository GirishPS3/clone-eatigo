import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from "../../components/Header/Header.js";
import styles from "../../assets/jss/material-kit-react/views/RegistrationPage.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import APP_CONSTANT from '../../constants'
import Parallax from "../../components/Parallax/Parallax.js";
import Button from "../../components/CustomButtons/Button.js";
import Corousel from "../../components/Corousel/Corousel.js";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 'food1.jpg',

    }
    this.imgList = ['food2.jpg', 'unplash.jpg', 'food1.jpg'];
  }

  changeImage() {
    let count = 0;
    setInterval(() => {
      if (count < this.imgList.length) {
        this.setState({ img: this.imgList[count] });
        count++;
      }
      else {
        count = 0;
      }

    }, 5000);
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ [`${event.target.name}_error`]: event.target.value ? false : true });
  };
  registerUser = (e) => {
    e.preventDefault();
    let newArr = [];
    let arrObj = {};
    Object.entries(this.state).map(obj => {
      !obj[1] && newArr.push([`${obj[0]}_error`, true]);
    });
    arrObj = Object.fromEntries(newArr);
    console.log(newArr);
    this.setState(arrObj);
  }
  componentDidMount() {
    this.changeImage();
  }
  render() {
    const { classes } = this.props;
    const { SignUp, EmailAddress, Password, confirmPassword } = APP_CONSTANT.APP_CONSTANTS.SignUp;
    const { ...rest } = this.props;
    return (
      <div className={classes.root}>
        <Header
          classNames={classes.Header}
          color="White"
          brand="Logo"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax style={{ marginTop: '60px', height: '400px' }} image={require(`../../assets/img/${this.state.img}`)}>
          <div className={classes.banner}>
            <img height='200px' width='400px' src={require("../../assets/img/eatigoImg.svg")} alt="" /><br />
            <Paper component="form" className={classes.search}>
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="try searching for a location, cuisine, or restaurant name"
                inputProps={{ 'aria-label': 'try searching for a location, cuisine, or restaurant name' }}
              />
              <Divider className={classes.divider} orientation="vertical" />
              <Button className={classes.searchButton} >search</Button>
            </Paper>
          </div>
        </Parallax>
        <div>
         <Corousel />
          {/* <Card >
            <Typography component="h1" variant="h5">Brands</Typography>
            <GridContainer justify="center" direction='row' alignItems="center">
              {[0, 1, 2, 3, 4, 5,6,7].map(()=> (
                <GridItem spacing={0} xs={2}>
                  <CardBody>
                    <img style={{ width: '150px', height: '150px' }} src={require(`../../assets/img/brands1.png`)} alt="" />
                  </CardBody>
                </GridItem>
              ))}
             </GridContainer>
          </Card> */}
        </div>
        </div>
    );
  }

}

export default withStyles((theme) => ({
          ...styles(theme)
        }),
        { withTheme: true })(RegisterUser);
