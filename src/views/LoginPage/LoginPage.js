import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import People from "@material-ui/icons/People";
// core components
import TextField from '@material-ui/core/TextField';

import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import { Link, Redirect } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Hidden from "@material-ui/core/Hidden";

import styles from "../../assets/jss/material-kit-react/views/loginPage.js";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import image from "../../assets/img/profile.svg";
import forgot from "../../assets/img/forgot.svg";
import close from "../../assets/img/close.png";
import Parallax from "../../components/Parallax/Parallax.js";
import StyledTypo from "../../components/Typography/Info.js";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
	const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
	const [inputType, setinputType] = React.useState("password");
	const [isLogin, setLogin] = React.useState(true);
	const [isForgot, setForgot] = React.useState(false);
	setTimeout(function () {
		setCardAnimation("");
	}, 700);

	const classes = useStyles();
	const { ...rest } = props;
	const changeInputType = () => {
		inputType === 'password' ? setinputType('text') : setinputType('password');
	}
	const showForgot = () => {
		setForgot(true);
		setLogin(false);
	}
	const showLogin = () => {
		setForgot(false);
		setLogin(true);
	}
	return (
		<div className={classes.paper}>
			<img width='30px' height='30px' className={classes.closeIcon} onClick={props.handleClose} src={close} alt="close" />

			{isForgot && <GridContainer justify="center" alignItems="center">
				<GridItem spacing={1} xs={6} sm={5}>
					<Parallax style={{ marginTop: '80px' }} image={require("../../assets/img/landing-bg1.jpeg")}>
						<Typography component="h1" variant="h5">Not Registered?</Typography>
						<Button transparent color="primary" >signin </Button>
					</Parallax>
				</GridItem>
				<GridItem xs={10} sm={7}>
					<form className={classes.form}>
						<CardHeader color="primary" className={classes.cardHeader}  >
							<Typography component="h1" variant="h5">Forgot Password</Typography>
						</CardHeader>
						<CardBody>
							<TextField
								className={classes.inputField}
								autoComplete="email"
								name="email"
								required
								fullWidth
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<Email className={classes.inputIconsColor} />
										</InputAdornment>
									),
								}}
								id="email"
								label="Email"
							/>
						</CardBody>
						<CardFooter className={classes.cardFooter}>
							<Button transparent onClick={showLogin} simple color="primary">Send Reset Link </Button>
							<Button onClick={showLogin} simple color="primary" size="lg">Login? </Button>
						</CardFooter>
					</form>
				</GridItem>
			</GridContainer>}
			{isLogin &&
				<GridContainer justify="center" alignItems="center">
					<GridItem spacing={0} sm={6}>
						<Hidden smDown implementation="css">
							<Parallax style={{ height: '500px', width: '100%', opacity: 1, borderRadius: '4px' }} image={require("../../assets/img/food1.jpg")}>
								<GridItem spacing={2} xs={12} >
									<div style={{ position: 'relative', marginTop: '-200px' }}>
										<Typography variant="h5" style={{ color: '#fff' }} >Not a Member?</Typography>
										<br />
										<Typography variant="h6" style={{ color: '#fff' }} >Create an Account for exciting offers!!</Typography>
										<br />
										<Button color='danger' ><Link className={classes.linkButton} to='/register-user'>Register </Link></Button>

									</div>

								</GridItem>
							</Parallax>
						</Hidden>
					</GridItem>
					<GridItem spacing={0} xs={10} sm={6}>
						<form>
							<CardHeader color="primary" className={classes.cardHeader} >
								<Avatar className={classes.avatar}>
									<LockOutlinedIcon />
								</Avatar>
								<Typography component="h1" variant="h5">
									Login
          					</Typography>
							</CardHeader>
							<CardBody>
								<TextField
									className={classes.inputField}
									autoComplete="email"
									name="email"
									required
									fullWidth
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<Email className={classes.inputIconsColor} />
											</InputAdornment>
										),
									}}
									id="email"
									label="Email"
								/>
								<TextField
									className={classes.inputField}
									name="password"
									required
									fullWidth
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<VisibilityOffIcon className={classes.inputIconsColor} />
											</InputAdornment>
										),
									}}
									id="password"
									label="Password"
								/>
							</CardBody>
							<CardFooter className={classes.cardFooter}>
								<Button transparent color="primary" >Login </Button>
							</CardFooter>
						</form>
					</GridItem>
				</GridContainer>
			}

		</div>
	);
}
