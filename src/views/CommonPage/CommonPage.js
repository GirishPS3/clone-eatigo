import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from "../../components/Header/Header.js";
import styles from "../../assets/jss/material-kit-react/views/RegistrationPage.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Tab from "../../components/TabPanel/TabPanel";
import Typography from '@material-ui/core/Typography';
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import category from '../../constants/category';
import Map from '../../components/Map/Map';
import Divider from '@material-ui/core/Divider';

class RegisterUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: category[this.props.match.params.category][this.props.match.params.id]['title'],
            number: category[this.props.match.params.category][this.props.match.params.id]['number'],
            subTitle: category[this.props.match.params.category][this.props.match.params.id]['subTitle'],
            reserved: category[this.props.match.params.category][this.props.match.params.id]['reserved'],
            recommended: category[this.props.match.params.category][this.props.match.params.id]['recommended'],
            expensive: category[this.props.match.params.category][this.props.match.params.id]['expensive'],
        }
    }
    render() {
        const { classes } = this.props;
        const textstyle1 = {
            borderBottom: '1.5px solid #f5831f',
            display: 'inline-block',
            padding: '20px 0 8px 0px',
            margin: '40px 0px 30px 0px',
            position: 'relative'
        };
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
                />
                <GridContainer justify="center" direction='row' alignItems="center">
                    <GridItem spacing={2} xs={12} sm={9}>

                        <div style={{ margin: '50px 0px 40px 40px' }}>
                            <Typography style={textstyle1} variant='h5'>{this.state.title}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">  {this.state.number} Restaurants </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">  {this.state.subTitle} </Typography>
                            <Divider style={{marginTop: '10px'}} />
                            <br />
                            <br />
                            <Tab reserved={this.state.reserved} expensive={this.state.expensive} recommended={this.state.recommended} />
                        </div>
                    </GridItem>
                    <GridItem spacing={0} xs={12} sm={3}>
                        <Map></Map>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }

}

export default withStyles((theme) => ({
    ...styles(theme)
}),
    { withTheme: true })(RegisterUser);
