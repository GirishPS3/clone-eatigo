import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from "../../components/Header/Header.js";
import styles from "../../assets/jss/material-kit-react/views/RegistrationPage.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import StyledCard from "../../components/Corousel/GridList";
import Typography from '@material-ui/core/Typography';
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import category from '../../constants/restaurant';
import Divider from '@material-ui/core/Divider';

class RegisterUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewAllList: category[this.props.match.params.type],
            imgPath: this.props.match.params.type === 'locations' ? 'cities' : this.props.match.params.type,
            title: this.props.match.params.type.charAt(0).toUpperCase() + this.props.match.params.type.slice(1, this.props.match.params.type.length)
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
        const container = {
            margin: '30px 80px 50px 50px'
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
                <div style={container}>
                    <GridContainer justify="center" direction='row' alignItems="center">
                        <GridItem spacing={2} xs={12}>
                            <div >
                                <Typography style={textstyle1} variant='h5'>{this.state.title}</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">  22 Restaurants </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">  Some of the most prominent brands on eatigo, offering multiple locations in your city. </Typography>
                                <Divider style={{ marginTop: '10px' }} />
                                <br /> <br />
                            </div>

                        </GridItem>
                    </GridContainer>
                    <GridContainer justify="center" direction='row' alignItems="center">
                        {this.state.viewAllList && this.state.viewAllList.map(list => (
                            <GridItem spacing={2} xs={12} sm={3}>
                                <StyledCard
                                    title={list.heading}
                                    number={list.number}
                                    description={list.description}
                                    route={list.route}
                                    image={require(`../../assets/img/${this.state.imgPath}/${list.img}`)}
                                />
                            </GridItem>
                        ))}
                    </GridContainer>
                </div>
            </div>
        );
    }

}

export default withStyles((theme) => ({
    ...styles(theme)
}),
    { withTheme: true })(RegisterUser);
