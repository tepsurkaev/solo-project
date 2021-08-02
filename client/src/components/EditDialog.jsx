import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { editProducts } from "../redux/features/products";

function EditDialog({ setOpen, open }) {
  const dispatch = useDispatch();

  const editingProduct = useSelector((state) => state.products.editingProduct);

  const handleEditImage = (e) => {
    dispatch({ type: "set/image", payload: e.target.value });
  };

  const handleEditName = (e) => {
    dispatch({ type: "set/name", payload: e.target.value });
  };

  const handleEditAmount = (e) => {
    dispatch({ type: "set/amount", payload: e.target.value });
  };

  const handleEditPrice = (e) => {
    dispatch({ type: "set/price", payload: e.target.value });
  };

  const handleEditVolume = (e) => {
    dispatch({ type: "set/volume", payload: e.target.value });
  };

  const handleClose = (id) => {
    dispatch(
      editProducts(id, {
        id: editingProduct._id,
        img: editingProduct.img,
        name: editingProduct.name,
        amount: editingProduct.amount,
        price: editingProduct.price,
        volume: editingProduct.volume,
      })
    );
    setOpen(false);
  };

  if (!editingProduct) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Edit product</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill out form fields and click edit button to edit your product
        </DialogContentText>
        <TextField
          value={editingProduct.img}
          onChange={handleEditImage}
          autoFocus
          margin="dense"
          id="image"
          label="Enter image link"
          type="text"
          fullWidth
        />
        <TextField
          value={editingProduct.name}
          onChange={handleEditName}
          autoFocus
          margin="dense"
          id="name"
          label="Enter product name"
          type="text"
          fullWidth
        />
        <TextField
          value={editingProduct.amount}
          onChange={handleEditAmount}
          autoFocus
          margin="dense"
          id="amount"
          label="Enter product amount"
          type="text"
          fullWidth
        />
        <TextField
          value={editingProduct.price}
          onChange={handleEditPrice}
          autoFocus
          margin="dense"
          id="price"
          label="Enter product price"
          type="text"
          fullWidth
        />
        <TextField
          value={editingProduct.volume}
          onChange={handleEditVolume}
          autoFocus
          margin="dense"
          id="volume"
          label="Enter product volume"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => handleClose(editingProduct._id)} color="primary">
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditDialog;
