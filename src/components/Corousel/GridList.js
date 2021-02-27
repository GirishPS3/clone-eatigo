import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    marginBottom: "10px",
    cursor: "pointer",
    backgroundColor: theme.palette.background.paper,
  },
  description: {
    fontSize: "14px",
    textAlign: "center",
    color: "#fff",
    padding: "0 18px",
    lineHeight: "16px",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  divider: {
    width: "200px",
    height: "1px",
    backgroundColor: "#fff",
    border: "none",
    marginBottom: "12px",
  },
  cardTitle: {
    paddingTop: "16px",
    paddingBottom: "6px",
    fontSize: "18px",
    textAlign: "center",
    color: "#fff",
  },
  cardSubtitle: {
    paddingBottom: "6px",
    fontSize: "14px",
    textAlign: "center",
    color: "#bbb",
  },
  card: {
    width: "400px",
    height: "162px",
    position: "relative",
    borderRadius: "5px",
    overflow: "hidden",
    cursor: "pointer !important",
  },
  cardContent: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "0",
    top: "90px",
    backgroundColor: "rgba(0,0,0,.6)",
    transition: "top .4s ease-in-out",
    "&:hover": {
      top: "0px",
    },
  },
}));

export default function TitlebarGridList(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.card}
        component={Link}
        to={props.route}
      >
        <img className={classes.img} src={props.image} alt="" />
        {props.title && (
          <div className={classes.cardContent}>
            <div className={classes.cardTitle}>{props.title}</div>
            <div className={classes.cardSubtitle}>
              {props.number} restaurants
            </div>
            <hr className={classes.divider} />
            <div className={classes.description}>{props.description}</div>
          </div>
        )}
      </CardActionArea>
    </Card>
  );
}
