import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableContainer,
  Typography,
  Button,
  makeStyles,
  Container,
  CircularProgress,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProduct, loadProducts } from "../../redux/features/products";
import { Helmet } from "react-helmet";

const useStyles = makeStyles({
  tableDeleteImg: {
    width: 65,
  },
  preloader: {
    padding: 50,
  },
});

function AdminDeleteProducts() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const deleting = useSelector((state) => state.products.deleting);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const handleRemoveProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return loading ? (
    <Container className={classes.preloader}>
      <CircularProgress />
    </Container>
  ) : (
    <TableContainer>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Volume</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow key={product._id}>
                <TableCell>
                  <img
                    className={classes.tableDeleteImg}
                    src={product.img}
                    alt={product.name}
                  />
                </TableCell>
                <TableCell>
                  <Typography>{product.name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.amount}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{`${product.price}₽`}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{`${product.volume}л`}</Typography>
                </TableCell>
                <TableCell>
                  {deleting ? (
                    <CircularProgress color="secondary" />
                  ) : (
                    <Button
                      onClick={() => handleRemoveProduct(product._id)}
                      variant="contained"
                      size="small"
                      color="secondary"
                    >
                      Delete
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminDeleteProducts;
