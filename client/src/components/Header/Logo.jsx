import { Grid, Typography } from "@material-ui/core";
import InvertColorsIcon from "@material-ui/icons/InvertColors";

function Logo() {
  return (
    <Grid container>
      <InvertColorsIcon />
      <Typography>Water</Typography>
    </Grid>
  );
}

export default Logo;
