import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from 'classnames';

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log(confirmed);
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={5} justify="center">
        <Grid item component={Card} xs={15} md={5} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2" gutterBottom>Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        
        <Grid item component={Card} xs={15} md={5} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" gutterBottom>Number of deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div >
  );
};

export default Cards;
