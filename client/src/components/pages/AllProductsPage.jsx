import { useEffect } from "react";
import { loadProducts } from "../../redux/features/products";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Container, Paper } from "@material-ui/core";
import Product from "../Products/Product";
import { makeStyles } from "@material-ui/styles";
import { Helmet } from "react-helmet";

const useStyles = makeStyles({
  preloader: {
    padding: 50,
  },
})

function AllProductsPage() {
  const dispatch = useDispatch();

  const classes = useStyles();

  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return loading ? (
    <Container className={classes.preloader}>
      <CircularProgress />
    </Container>
  ) : (
    <Paper>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {products.map((product) => {
        return (
          <Product
            key={product._id}
            name={product.name}
            volume={product.volume}
            price={product.price}
            img={product.img}
            amount={product.amount}
            productId={product._id}
          />
        );
      })}
    </Paper>
  );
}

export default AllProductsPage;
