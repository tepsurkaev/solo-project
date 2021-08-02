import { Grid, Typography } from "@material-ui/core";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {});

function Logo() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item>
        <InvertColorsIcon />
      </Grid>
      <Grid item>
        <Typography>Water</Typography>
      </Grid>
    </Grid>
  );
}

export default Logo;
