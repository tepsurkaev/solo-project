import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsInCart } from "../../redux/features/cart";

const useStyles = makeStyles({
  imgInCart: {
    width: 20
  },
})

function Cart() {
  const classes = useStyles()
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(getProductsInCart());
  }, [dispatch]);

  return (
    <Container disableGutters={true} component="div" maxWidth="lg">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productsInCart.map(item => {
            return item.products.map(elem => {
              return (
                <TableRow key={elem._id}>
                  <TableCell>{elem.productId._id}</TableCell>
                  <TableCell>
                    <img className={classes.imgInCart} src={elem.productId.img} alt="" />
                  </TableCell>
                  <TableCell>{elem.productId.name}</TableCell>
                  <TableCell>{elem.productId.amount - elem.quantity}</TableCell>
                  <TableCell>{elem.quantity}</TableCell>
                </TableRow>
              )
            })
          })}
        </TableBody>
      </Table>
    </Container>
  );
}

export default Cart;
