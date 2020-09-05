import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import MediaCard from '../../components/Card/MediaCard.js';


function TabPanel(props) {
  const { children, value, index, other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '600px',
  },
}));

export default function ScrollableTabsButtonPrevent(props) {
  const classes = useStyles();
  const { reserved, recommended, expensive, costeffective, distance, star } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar color='white' position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab label='Most Reserved' aria-label="reserved" {...a11yProps(0)} />
          <Tab label={'most expensive'} aria-label="most expensive" {...a11yProps(1)} />
          <Tab label='Least expensive' aria-label="least expensive" {...a11yProps(2)} />
          <Tab label='Recommended' aria-label="recommended" {...a11yProps(3)} />
          <Tab label='Distance' aria-label="distance" {...a11yProps(4)} />
          <Tab label='Star Rating' aria-label="star rating" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <GridContainer spacing={2} direction='row' >
          {reserved && reserved.map(reserved => (
            <GridItem xs={12} sm={4}>
              <MediaCard
                heading={reserved.heading}
                style={{ minHeight: '200px' }}
                img={require(`../../assets/img/cities/${reserved.img}`)}
                number={reserved.number}
                route={reserved.route}
              />
            </GridItem>
          ))}
        </GridContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GridContainer spacing={2} direction='row' >
          {expensive && expensive.map(reserved => (
            <GridItem xs={12} sm={4}>
              <MediaCard
                heading={reserved.heading}
                style={{ height: '175px' }}
                img={require(`../../assets/img/cities/${reserved.img}`)}
                number={reserved.number}
                route={reserved.route}
              />
            </GridItem>
          ))}
        </GridContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GridContainer spacing={2} direction='row' >
          {reserved && reserved.map(reserved => (
            <GridItem xs={12} sm={4}>
              <MediaCard
                heading={reserved.heading}
                style={{ height: '175px' }}
                img={require(`../../assets/img/cities/${reserved.img}`)}
                number={reserved.number}
                route={reserved.route}
              />
            </GridItem>
          ))}
        </GridContainer>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <GridContainer spacing={1} direction='row' >
          {recommended && recommended.map(reserved => (
            <GridItem xs={12} sm={4}>
              <MediaCard
                heading={reserved.heading}
                style={{ height: '300px' }}
                img={require(`../../assets/img/cities/${reserved.img}`)}
                number={reserved.number}
                route={reserved.route}
              />
            </GridItem>
          ))}
        </GridContainer>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <GridContainer spacing={2} direction='row' >
          {reserved && reserved.map(reserved => (
            <GridItem xs={12} sm={4}>
              <MediaCard
                heading={reserved.heading}
                style={{ height: '175px' }}
                img={require(`../../assets/img/cities/${reserved.img}`)}
                number={reserved.number}
                route={reserved.route}
              />
            </GridItem>
          ))}
        </GridContainer>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <GridContainer spacing={2} direction='row' >
          {reserved && reserved.map(reserved => (
            <GridItem xs={12} sm={4}>
              <MediaCard
                heading={reserved.heading}
                style={{ height: '175px' }}
                img={require(`../../assets/img/cities/${reserved.img}`)}
                number={reserved.number}
                route={reserved.route}
              />
            </GridItem>
          ))}
        </GridContainer>
      </TabPanel>
    </div>
  );
}
