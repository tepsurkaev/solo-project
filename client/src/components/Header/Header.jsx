import { Container, Grid, makeStyles } from "@material-ui/core";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SiteName from "./SiteName";
import Cart from "./Cart";

const useStyles = makeStyles((theme) => {
  return {
    header: {
      marginBottom: 35,
      paddingTop: 20,
      backgroundColor: "#3f51b5",
      color: "#fff",
      alignItems: "center",
    },
  };
});

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container>
        <Grid container spacing={7}>
          <Grid item xs={3}>
            <Logo />
          </Grid>
          <Grid item xs={5}>
            <SiteName />
          </Grid>
          <Grid item xs={2}>
            <Navbar />
          </Grid>
          <Grid item>
            <Cart />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}

export default Header;
