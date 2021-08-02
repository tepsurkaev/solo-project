import {
  Button,
  Container,
  Grid,
  TextField,
  TextareaAutosize,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Helmet } from "react-helmet";

const useStyles = makeStyles({
  textArea: {
    minWidth: 700,
    maxWidth: 700,
    minHeight: 250,
    maxHeight: 250,
    marginTop: 45,
  },
  container: {},
  inputs: {
    marginTop: 35,
  },
  sendBtn: {
    margin: "30px 0 30px 0",
  },
});

function AboutPage() {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="xl">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <Typography variant="h3">Contact Us</Typography>
      <Grid container>
        <Grid className={classes.inputs} item xs={12} sm={6} md={3} lg={2}>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
        </Grid>
        <Grid className={classes.inputs} item xs={12} sm={6} md={3} lg={2}>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </Grid>
        <Grid className={classes.inputs} item xs={12} sm={6} md={3} lg={2}>
          <TextField id="outlined-basic" label="Phone" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            placeholder="message"
            className={classes.textArea}
            maxRows={6}
            aria-label="minimum height"
          />
        </Grid>
        <Grid>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.sendBtn}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutPage;
