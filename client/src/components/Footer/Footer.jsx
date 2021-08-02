import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Contacts from "./Contacts";
import { Copyright } from "@material-ui/icons";
import SiteName from "./SiteName";
import Logo from "./Logo";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#3f51b5",
    color: "white",
    marginTop: 20,
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <Logo />
          </Grid>
          <Grid item xs={4}>
            <SiteName />
          </Grid>
          <Grid item>
            <Copyright />
          </Grid>
          <Grid item>
            <Contacts />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
