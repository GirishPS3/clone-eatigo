import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MediaCard from '../../components/Card/StyledCard.js';
import restaurant from "../../constants/restaurant";
import { Grid } from '@material-ui/core';
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import { Link } from "react-router-dom";

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [locationIndex, setLocationIndex] = useState(0);
  const [themesIndex, setThemesIndex] = useState(0);
  const [cuisinesIndex, setCuisinesIndex] = useState(0);
  const chevronWidth = 40;
  const textstyle = {
    borderBottom: '1.5px solid #f5831f',
    display: 'inline-block',
    padding: '20px 0 8px 0px',
    margin: '40px 0px 30px 40px',
    position: 'relative'
  }
  const textstyle1 = {
    borderBottom: '1.5px solid #f5831f',
    display: 'inline-block',
    padding: '20px 0 8px 0px',
    margin: '40px 0px 30px 0px',
    position: 'relative'
  }
  const text2Style = {
    color: '#ee2c30',
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '20px',
    padding: '6px 26px',
    textDecoration: 'none',
  }

  return (
    <div>
      <div style={{ padding: `0 ${chevronWidth}px`, margin: `0 ${chevronWidth}px` }}>
        <GridContainer justify="center" direction='row' alignItems="center">
          <GridItem spacing={2} xs={12} sm={9}>
            <Typography style={textstyle1} variant='h5'>Brands</Typography>
          </GridItem>
          <GridItem spacing={2} xs={12} sm={3}>
            <Link style={text2Style} to='/view-all/brands'><Typography>View All Brands</Typography></Link>
          </GridItem>
        </GridContainer>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={7}
          gutter={20}
          leftChevron={<Card style={{ border: '1px solid blue' }}><ArrowBackIosIcon style={{ margin: '5px', padding: '5px' }} /></Card>}
          rightChevron={<Card style={{ border: '1px solid blue' }}><ArrowForwardIosIcon style={{ margin: '5px', padding: '5px' }} /></Card>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {restaurant.brands && restaurant.brands.map((data) => (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '150px', height: '150px' }}>
              <MediaCard
                style={{marginBottom: '10px'}}
                img={require(`../../assets/img/brands/${data.img}`)}
                route={data.route}
              />
            </div>
          ))}
        </ItemsCarousel>
      </div>
      <div>
        <div style={{ padding: `0 ${chevronWidth}px`, margin: `0 ${chevronWidth}px` }}>
          <GridContainer justify="center" direction='row' alignItems="center">
            <GridItem spacing={2} xs={12} sm={9}>
              <Typography style={textstyle1} variant='h5'>Locations</Typography>
            </GridItem>
            <GridItem spacing={2} xs={12} sm={3}>
              <Link style={text2Style} to='/view-all/locations'><Typography>View All Locations</Typography></Link>
            </GridItem>
          </GridContainer>
          <ItemsCarousel
            requestToChangeActive={setLocationIndex}
            activeItemIndex={locationIndex}
            numberOfCards={6}
            gutter={20}
            leftChevron={<Card style={{ border: '1px solid blue' }}><ArrowBackIosIcon style={{ margin: '5px', padding: '5px' }} /></Card>}
            rightChevron={<Card style={{ border: '1px solid blue' }}><ArrowForwardIosIcon style={{ margin: '5px', padding: '5px' }} /></Card>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {restaurant.locations && restaurant.locations.map((data) => (
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <MediaCard
                  heading={data.heading}
                  img={require(`../../assets/img/cities/${data.img}`)}
                  number={data.number}
                  route={data.route}
                />
              </div>
            ))}
          </ItemsCarousel>
        </div>
      </div>
      <div>
        <div style={{ padding: `0 ${chevronWidth}px`, margin: `0 ${chevronWidth}px` }}>
          <GridContainer justify="center" direction='row' alignItems="center">
            <GridItem spacing={2} xs={12} sm={9}>
              <Typography style={textstyle1} variant='h5'>Themes</Typography>
            </GridItem>
            <GridItem spacing={2} xs={12} sm={3}>
              <Link style={text2Style} to='/view-all/themes'><Typography >View All Themes</Typography></Link>
            </GridItem>
          </GridContainer>
          <ItemsCarousel
            requestToChangeActive={setThemesIndex}
            activeItemIndex={themesIndex}
            numberOfCards={6}
            gutter={20}
            leftChevron={<Card style={{ border: '1px solid blue' }}><ArrowBackIosIcon style={{ margin: '5px', padding: '5px' }} /></Card>}
            rightChevron={<Card style={{ border: '1px solid blue' }}><ArrowForwardIosIcon style={{ margin: '5px', padding: '5px' }} /></Card>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {restaurant.locations && restaurant.locations.map((data) => (
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <MediaCard
                  heading={data.heading}
                  img={require(`../../assets/img/cities/${data.img}`)}
                  number={data.number}
                  route={data.route}
                />
              </div>
            ))}
          </ItemsCarousel>
        </div>
      </div>
      <div>
        <div style={{ padding: `0 ${chevronWidth}px`, margin: `0 ${chevronWidth}px` }}>
          <GridContainer justify="center" direction='row' alignItems="center">
            <GridItem spacing={2} xs={12} sm={9}>
              <Typography style={textstyle1} variant='h5'>Cuisines</Typography>
            </GridItem>
            <GridItem spacing={2} xs={12} sm={3}>
              <Link style={text2Style} to='/view-all/cuisines'><Typography >View All Cuisines</Typography></Link>
            </GridItem>
          </GridContainer>
          <ItemsCarousel
            requestToChangeActive={setCuisinesIndex}
            activeItemIndex={cuisinesIndex}
            numberOfCards={6}
            gutter={20}
            leftChevron={<Card style={{ border: '1px solid blue' }}><ArrowBackIosIcon style={{ margin: '5px', padding: '5px' }} /></Card>}
            rightChevron={<Card style={{ border: '1px solid blue' }}><ArrowForwardIosIcon style={{ margin: '5px', padding: '5px' }} /></Card>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {restaurant.locations && restaurant.locations.map((data) => (
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <MediaCard
                  heading={data.heading}
                  img={require(`../../assets/img/cities/${data.img}`)}
                  number={data.number}
                  route={data.route}
                />
              </div>
            ))}
          </ItemsCarousel>
        </div>
      </div>

    </div>
  );
};