import { Grid } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => {
  return {
    cartIcon: {
      color: "white",
    },
  };
});

function Cart() {
  const classes = useStyles();
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <NavLink to="/cart">
          <ShoppingCartOutlinedIcon
            className={classes.cartIcon}
          />
        </NavLink>
      </Grid>
    </Grid>
  );
}

export default Cart;
