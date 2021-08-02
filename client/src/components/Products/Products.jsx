// import { useDispatch, useSelector } from "react-redux";
// import Product from "./Product";
// import { useEffect } from "react";
// import { loadProducts } from "../../redux/features/products";
// import { CircularProgress, Container, Paper } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core";
//
// const useStyles = makeStyles((theme) => {
//   return {
//     preloader: {
//       padding: 50,
//     },
//   };
// });
//
// function Products() {
//   const classes = useStyles();
//
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products.items);
//   const loading = useSelector((state) => state.products.loading);
//
//   useEffect(() => {
//     dispatch(loadProducts());
//   }, [dispatch]);
//
//   return loading ? (
//     <Container className={classes.preloader}>
//       <CircularProgress />
//     </Container>
//   ) : (
//     <Paper>
//       {products.map((product) => {
//         return (
//           <Product
//             key={product._id}
//             name={product.name}
//             volume={product.volume}
//             price={product.price}
//             img={product.img}
//           />
//         );
//       })}
//     </Paper>
//   );
// }
//
// export default Products;
