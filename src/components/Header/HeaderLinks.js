/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Divider from '@material-ui/core/Divider';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, Language, CloudDownload, ShoppingCart, ExitToApp, AccountCircle } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";
import LoginPage from '../../views/LoginPage/LoginPage.js'
import Registration from '../../views/Registration/Registration.js'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="More"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={Apps}
            dropdownList={[
              [ 'Bengaluru' , 'India'],
              [ 'Mumbai' , 'India'],
              [ 'Pune' , 'India']
            ]}
          />
        </ListItem>

        <ListItem className={classes.listItem}>
          <Button
            onClick={handleOpen}
            color="transparent"
            className={classes.navLink}
            style={{ color: '#f5831f' }}
          >
            English
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            onClick={handleOpen}
            color="transparent"
            className={classes.navLink}
          >
            <ExitToApp />
            Login
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            onClick={handleOpen}
            color="transparent"
            className={classes.navLink}
          >
            Register
          </Button>
        </ListItem>

      </List>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <LoginPage handleClose={handleClose} />
        </Fade>
      </Modal>
    </div>

  );
}
