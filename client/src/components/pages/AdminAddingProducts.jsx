import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { addingProduct } from "../../redux/features/products";

const useStyles = makeStyles({
  sendIcon: {
    cursor: "pointer",
  },
});

function AdminAddingProducts() {
  const dispatch = useDispatch();

  const adding = useSelector((state) => state.products.adding);

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [volume, setVolume] = useState("");

  const handleAddImage = (e) => {
    setImage(e.target.value);
  };

  const handleAddName = (e) => {
    setName(e.target.value);
  };

  const handleAddAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAddPrice = (e) => {
    setPrice(e.target.value);
  };

  const handleAddVolume = (e) => {
    setVolume(e.target.value);
  };

  const handleAdd = () => {
    dispatch(addingProduct({ image, name, amount, price, volume }));
  };

  const classes = useStyles();

  return (
    <Table>
      <Helmet>
        <title>Admin</title>
      </Helmet>
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
        <TableRow>
          <TableCell>
            <TextField
              id="outlined-basic"
              label="Enter image link"
              variant="outlined"
              onChange={handleAddImage}
            />
          </TableCell>
          <TableCell>
            <TextField
              id="outlined-basic"
              label="Enter product name"
              variant="outlined"
              onChange={handleAddName}
            />
          </TableCell>
          <TableCell>
            <TextField
              id="outlined-basic"
              label="Enter product amount"
              variant="outlined"
              onChange={handleAddAmount}
            />
          </TableCell>
          <TableCell>
            <TextField
              id="outlined-basic"
              label="Enter product price"
              variant="outlined"
              onChange={handleAddPrice}
            />
          </TableCell>
          <TableCell>
            <TextField
              id="outlined-basic"
              label="Enter product volume"
              variant="outlined"
              onChange={handleAddVolume}
            />
          </TableCell>
          <TableCell>
            {adding ? (
              <CircularProgress />
            ) : (
              <SendIcon
                className={classes.sendIcon}
                color="primary"
                onClick={handleAdd}
              />
            )}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default AdminAddingProducts;
