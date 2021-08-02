import { Grid, makeStyles, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  homeLink: {
    color: "white",
    textDecoration: "none",
  },
});

function SiteName() {
  const classes = useStyles();

  return (
    <Grid container spacing={10}>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Typography>
          <NavLink className={classes.homeLink} to="/">waterDelivery</NavLink>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SiteName;
