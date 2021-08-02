import { Button, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addProductInCart } from "../../redux/features/cart";

const useStyles = makeStyles((theme) => {
  return {
    waterImages: {
      width: 65,
    },
  };
});

function Product({ name, volume, price, img, amount, productId }) {
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleAddToCart = (productId) => {
    dispatch(addProductInCart(productId));
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={6}>
        <Grid item xs={2}>
          <img className={classes.waterImages} src={img} alt={name} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h4">{`Name: ${name}`}</Typography>
          <Typography variant="h6">{`Volume: ${volume}л`}</Typography>
          <Typography variant="h6">{`Price: ${price}₽`}</Typography>
          <Typography variant="h6">{`Amount: ${amount}`}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Button
            onClick={() => handleAddToCart(productId)}
            variant="contained"
            color="primary"
            size="medium"
          >
            Buy
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Product;
