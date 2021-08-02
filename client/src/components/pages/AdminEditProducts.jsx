import {
  TableContainer,
  makeStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addToEditingProduct,
  loadProducts,
} from "../../redux/features/products";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Helmet } from "react-helmet";
import EditDialog from "../EditDialog";

const useStyles = makeStyles({
  tableEditImg: {
    width: 65,
  },
  preloader: {
    padding: 50,
  },
  editIcon: {
    cursor: "pointer",
  },
});

// Не забыть сделать один компонент для всех table head

function AdminEditProducts() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);
  const editing = useSelector((state) => state.products.editing);
  const loading = useSelector((state) => state.products.loading);

  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClickOpen = (product) => {
    dispatch(addToEditingProduct(product));

    setOpen(true)
  };

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);


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
                    className={classes.tableEditImg}
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
                  <EditOutlinedIcon
                    onClick={() => handleClickOpen(product)}
                    fontSize="large"
                    className={classes.editIcon}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <EditDialog setOpen={setOpen} open={open} />
    </TableContainer>
  );
}

export default AdminEditProducts;
